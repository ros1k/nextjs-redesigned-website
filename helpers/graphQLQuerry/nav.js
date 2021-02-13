
const navigationQuery = `
      query MyQuery {
        navigations(locales: en) {
          id
          name
          locale
          urlSlug
          icon {
            url
          }
        }
      }
    `

export default navigationQuery