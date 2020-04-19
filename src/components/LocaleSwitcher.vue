<template>
  <v-menu
    bottom
    left
    open-on-hover
    transition="slide-y-transition"
  >
    <template v-slot:activator="{ on }">
      <v-btn
        icon
        class="mx-1"
        v-on="on"
      >
        <v-icon>mdi-translate</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-subheader style="height: 36px;">
        <v-icon
          small
          color="grey lighten-1"
          class="mr-1"
        >
          mdi-translate
        </v-icon> {{ $t('menu.languages') }}
      </v-subheader>
      <v-list-item-group
        v-model="activeLocale"
        mandatory
      >
        <v-list-item
          v-for="(locale, i) in localizations"
          :key="i"
        >
          <v-list-item-title class="mr-2">
            {{ locale.name }}
          </v-list-item-title>
          <v-list-item-action v-if="locale.beta">
            <v-icon small>
              mdi-beta
            </v-icon>
          </v-list-item-action>
          <v-list-item-action-text class="monospace ml-2">
            {{ locale.id }}
          </v-list-item-action-text>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class LocaleSwitcher extends Vue {
    localizations = [
      {
        id: 'zh',
        name: '中文'
      }, {
        id: 'en',
        name: 'English'
      }
    ]

    get activeLocale () {
      return this.localizations.indexOf(this.localizations.find(el => el.id === this.$i18n.locale))
    }

    set activeLocale (localeIndex) {
      const localeObject = this.localizations[localeIndex]
      this.changeLocale(localeObject.id)
    }

    changeLocale (localeId) {
      this.$i18n.locale = localeId
      this.$vuetify.lang.current = localeId
      document.title = `${this.$t('app.name')} | wuhan.support`
      document.documentElement.lang = localeId
    }
}
</script>

<style scoped>

</style>
