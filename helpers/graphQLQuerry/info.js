
const mainInfoQuerry = `
   query MyQuery {
     infos(locales: en) {
       id
       address
       imie_i_nazwisko
       tekstDoAnimacji
       telefon
       email
       description
       cv {
         url
       }
       mySkills {
         skill
         skillIcon {
           url
         }
       }
     }
   }
   
   `

 export default mainInfoQuerry;