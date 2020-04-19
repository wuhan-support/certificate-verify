function getFirstBrowserLanguageWithRegionCode (): string {
  const nav = window.navigator
  const browserLanguagePropertyKeys = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage']
  let i
  let language
  let len
  let shortLanguage = null

  // support for HTML 5.1 "navigator.languages"
  if (Array.isArray(nav.languages)) {
    for (i = 0; i < nav.languages.length; i++) {
      language = nav.languages[i]
      len = language.length
      if (!shortLanguage && len) {
        shortLanguage = language
      }
      if (language && len > 2) {
        return language
      }
    }
  }

  // support for other well known properties in browsers
  for (i = 0; i < browserLanguagePropertyKeys.length; i++) {
    const k = browserLanguagePropertyKeys[i]
    // @ts-ignore
    language = nav[k]
    // skip this loop iteration if property is null/undefined.  IE11 fix.
    if (language == null) { continue }
    len = language.length
    if (!shortLanguage && len) {
      shortLanguage = language
    }
    if (language && len > 2) {
      return language
    }
  }

  return shortLanguage
}

function getFirstBrowserLanguage (): string {
  const language = getFirstBrowserLanguageWithRegionCode().replace('_', '-')
  if (!language) return 'zh' // use default
  const languages = language.split('-')
  if (languages.length === 1) {
    return language
  } else if (languages.length === 2) {
    return languages[0]
  } else {
    // probably malformed...
    return language
  }
}

export default { getFirstBrowserLanguage }
