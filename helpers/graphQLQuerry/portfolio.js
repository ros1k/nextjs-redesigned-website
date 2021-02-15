
const portfolioQuerry = `
query portfolio {
  portfolios(locales: en) {
    company
    id
    isPageOnline
    otherDescription
    website
    website_type
    pageImage {
      url
    }
    imagePlaceholder {
      url
    }
    linkDoKodu
    createdWith
    projectDescription
    portfolioDescriptionImage {
      url
    }
  }
}
   `
 
 export default portfolioQuerry