
const mainInfoQuerry = `
   query MyQuery {
     infos(locales: en) {
       id
       address
       imie_i_nazwisko
       tekstDoAnimacji
       telefon
       email
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