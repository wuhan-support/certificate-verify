<template>
  <div>
    <div :class="`${styles.color}--text`">
      <v-icon x-large :color="styles.color" class="mx-auto text-center">
        {{styles.icon}}
      </v-icon>
      <h1 class="display-1 font-weight-bold mt-2 mb-1">
        {{ statusText.title }}
      </h1>
      <p class="subtitle-1">
        {{ statusText.subtitle }}
      </p>
    </div>
    <v-card v-if="result !== 3" class="anim">
      <v-fade-transition>
        <v-overlay absolute v-if="result === 0 || result === 2" opacity="0.9" :class="`${result !== 0 ? 'stripped-' : ''}background anim`">
          <div class="d-flex flex-column justify-center">
            <v-progress-circular indeterminate class="mx-auto" v-if="result === 0" />
            <v-icon x-large v-else>
              mdi-alert
            </v-icon>
            <span class="mt-3 title">{{ statusText.title }}</span>
          </div>
        </v-overlay>
      </v-fade-transition>
      <v-card-title>
        <h1 class="title">
          {{ $t('verifier.details.title') }}
        </h1>
      </v-card-title>
      <v-card-subtitle>
        <p class="subtitle-1 text-left">
          {{ $t('verifier.details.subtitle') }}
        </p>
      </v-card-subtitle>
      <v-card-text>
        <v-list class="text-left anim">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>
                mdi-account
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                {{ args.name }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ $t('field.name') }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>
                mdi-account-group
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                {{ args.group }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ $t('field.group') }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import * as qs from 'query-string'
import Validity from '@/models/validity'
import verifySignature from '@/utils/verifier'

function sleep (ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

interface Args {
  name: string;
  group: string;
  signature: string;
}

interface Styles {
  color: string;
  icon: string;
}

interface TPair {
  title: string;
  subtitle: string;
}

@Component
export default class Verifier extends Vue {
    @Prop()
    query!: string;

    result: Validity = Validity.WAITING;

    get statusText (): TPair {
      const t = this.$t('verifier.statuses') as unknown as string[]
      return t[this.result] as unknown as TPair
    }

    get styles (): Styles {
      switch (this.result) {
        case Validity.WAITING: {
          return {
            color: 'grey',
            icon: 'mdi-timer'
          }
        }
        case Validity.OK: {
          return {
            color: 'green',
            icon: 'mdi-check'
          }
        }
        case Validity.ILLEGAL_ARGUMENTS: {
          return {
            color: 'deep-orange',
            icon: 'mdi-help-circle'
          }
        }
        case Validity.SIGNATURE_MISMATCH: {
          return {
            color: 'red',
            icon: 'mdi-alert-circle'
          }
        }
        default: {
          return {
            color: 'red',
            icon: 'mdi-help-circle'
          }
        }
      }
    }

    get args (): Args {
      const r = qs.parse(this.query)
      const name = r.n as string
      const group = r.g as string
      const signature = r.s as string
      return { name, group, signature }
    }

    mounted () {
      this.verify()
    }

    async verify () {
      const args = this.args
      verifySignature(args.name, args.group, args.signature)
        .then((validity) => {
          sleep(Math.random() * 3000 + 1000)
            .then(() => {
              this.result = validity
            })
        })
        .catch((error) => {
          if (error === Validity.ILLEGAL_ARGUMENTS) {
            this.result = Validity.ILLEGAL_ARGUMENTS
          } else {
            sleep(Math.random() * 3000 + 1000)
              .then(() => {
                this.result = Validity.SIGNATURE_MISMATCH
              })
          }
        })
    }
}
</script>

<style scoped>
  .background {
    background: rgba(0, 0, 0, 0.6)
  }
.stripped-background {
  background: repeating-linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0.6),
    rgba(255, 255, 255, 0.6) 45px,
    rgba(0, 0, 0, 0.6) 45px,
    rgba(0, 0, 0, 0.6) 90px
  );
}
</style>
