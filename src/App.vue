<template>
  <v-app :dark="dark">
    <v-content app>
      <v-container >
        <v-row align="start" justify="center" class="text-center fill-height">
          <v-col cols="12">
            <div class="locale-switcher">
              <v-btn
                icon
                class="mx-1"
                @click="changeDark(!dark)"
              >
                <v-icon>mdi-invert-colors</v-icon>
              </v-btn>

              <LocaleSwitcher />
            </div>
            <v-img
              :src="require('@/assets/logo.svg')"
              aspect-ratio="4.4"
              max-width="256px"
              contain
              class="mx-auto py-3"
              style="margin-top: 36px"
            />

            <v-row
              justify="center"
              align="center"
              class="pb-3 mx-1"
            >
              <v-col
                cols="12"
                class="pt-0"
              >
                <!--                  <h2 class="subtitle-1 font-weight-bold text-center">-->
                <!--                    {{ $t('app.slogan').join(' · ') }}-->
                <!--                  </h2>-->
                <span class="overline text-center">
                    {{ $t('app.overline') }}
                  </span>
                <h1 class="headline font-weight-bold text-center">
                  {{ $t('app.name') }}
                </h1>
              </v-col>
            </v-row>

            <v-divider />

            <Verifier :query="query" class="my-4" />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer
      padless
    >
      <v-card
        flat
        tile
        class="text-center pb-2 anim"
        style="width: 100%; border-top: 1px solid rgba(0, 0, 0, .08)"
      >
        <v-card-text>
          <span>
            <a
              href="https://wuhan.support"
              target="_blank"
              style="text-decoration: none;"
            >
              <strong>
                {{ $t('footer.team') }}
              </strong>
            </a>
          </span>

          <br>

          <v-btn
            small
            outlined
            class="mt-1"
            href="https://github.com/wuhan-support/"
          >
            <v-icon left small>
              mdi-github
            </v-icon>
            {{ $t('footer.source') }}
          </v-btn>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { Component, Vue } from 'vue-property-decorator'
import Verifier from '@/components/Verifier.vue'
import LocaleSwitcher from '@/components/LocaleSwitcher.vue'
import strings from '@/utils/strings'

@Component({
  components: {
    LocaleSwitcher,
    Verifier,
    HelloWorld
  }
})
export default class App extends Vue {
  query: string = window.location.search.slice(1)

  dark = false;

  created () {
    const language = strings.getFirstBrowserLanguage()

    this.$i18n.locale = language
    this.$vuetify.lang.current = language
    document.title = `${this.$t('app.name')} | wuhan.support`
    document.documentElement.lang = language
  }

  mounted () {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.changeDark(true)
    } else {
      this.changeDark(false)
    }
  }

  changeDark (dark: boolean) {
    this.$vuetify.theme.dark = dark
    this.dark = dark
  }
}
</script>

<style scoped>
  .locale-switcher {
    position: fixed !important;
    right: 1em !important;
    top: 1em !important;
    z-index: 99999999;
  }
</style>

<style>
  body, .anim {
    transition: all .225s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
</style>
