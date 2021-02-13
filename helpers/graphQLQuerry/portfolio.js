
const portfolioQuerry = `
   query portfolio {
     portfolios(locales: en) {
       company
       id
       isPageOnline
       otherDescription
       website
       website_type
       project_description
       pageImage {
         url
       }
       imagePlaceholder {
         url
       }
       linkDoKodu
       createdWith
     }
   }
   `
 
 export default portfolioQuerry