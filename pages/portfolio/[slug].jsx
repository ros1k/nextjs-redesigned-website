import React, { useContext ,useEffect,useState} from 'react'
import { useRouter } from 'next/router'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import style from './SinglePortfolioPage.module.scss'
import Background from 'components/Background/Background'
import Layout1140 from 'components/Layout1140'
import LayoutFluid from 'components/LayoutFluid'
import Navigation from 'components/Navigation/Navigation'
import PageHeader from 'components/PageHeader/PageHeader'
import { StoreContext } from 'store/StoreProvider'
import classnames from "classnames";
import navigationQuery from 'helpers/graphQLQuerry/nav';
import picturesQuerry from 'helpers/graphQLQuerry/pictures';
import portfolioQuerry from 'helpers/graphQLQuerry/portfolio';
import SingleSection from 'components/PortfolioPage/SingleSection';
import { motion } from 'framer-motion';
import Contact from 'components/Contact/Contact';
import ParticlesBackground from 'components/ParticlesBackground/ParticlesBackground'
import MobileNavigation from 'components/MobileNavigation/MobileNavigation'


const SinglePortfolioPage = ({ navigationItems, portfolio,images }) =>{
   const {setNavItems ,setImages, transition} = useContext(StoreContext)
   const [currentPageData, setCurrentPageData]= useState()
   const [sectionTitles,setSectionTitles] = useState()
   const [sectionDesc,setSectionDesc] = useState()
 
   const router = useRouter()
   const slug = router.query.slug || []
   const currentTrans = { duration: 2, ease: [0.6, 0.01, -0.05, 0.9]}
   const getTitlesAndDesc = () =>{
      if(currentPageData){
         const titles = []
         const desc = []
         currentPageData.projectDescription.map((elem,i)=>{
            const tempArray =  elem.split('|')
            titles[i] = tempArray[0]
            desc[i] = tempArray[1]
         })
         setSectionTitles(titles)
         setSectionDesc(desc)
      }
   }


   useEffect(()=>{
      setNavItems(navigationItems)
      setImages(images)
      getProperPageData()
      getTitlesAndDesc()
   },[navigationItems,currentPageData])
  
   
   const getProperPageData = () =>{
      portfolio.map((element,i)=>{
        element.company.includes(slug) ? setCurrentPageData(portfolio[i]) : null
      })
     
   }
   return (
          <motion.div 
               transition={{
                  duration:0.3,
                  delay:0,
               }}
               exit={{opacity:0}}>
            {currentPageData && 
               <div  >
                    <motion.div initial={{opacity:0, width:'100vw',height:'100vh'}} animate={{opacity:1,transition:{
                        duration:0.5
                        }}}
                        exit={{opacity:0}}
                        className={'particlesBG'}>
                        <ParticlesBackground/>
                        </motion.div>
               <LayoutFluid>
                  
                  <Background bgImage={currentPageData.pageImage.url} isAnimated={true} bgImagePh={currentPageData.imagePlaceholder.url}/>
                  <div> 
                     <Navigation delay={6}/>
                     <Layout1140>
                        <PageHeader 
                              title={currentPageData.website_type.split('_').join(' ')} 
                              isSubPage={true}
                              client={currentPageData.company}
                              isPageOnline={currentPageData.isPageOnline}
                              website={currentPageData.website}
                              delay={2.6}
                              />
                              {/* {currentPageData.portfolioDescriptionImage.map((e,i) => {
                                 return <SingleSection key={i} url={e.url} side={i%2===0} counter={i} description={sectionDesc?sectionDesc[i]:null} title={sectionTitles?sectionTitles[i]:null}/>
                              })}  */}
                              <Contact/>
                              <MobileNavigation/>
                     </Layout1140>
                  </div>
               </LayoutFluid>
            </div>
            }
       </motion.div>
   )
}
export async function getStaticPaths() {
   // Call an external API endpoint to get posts
  
  
   const client = new ApolloClient({
      uri: process.env.GQL_ENDPOINT,
      cache: new InMemoryCache(),
      headers:{
        authorization: process.env.GQL_AUTH
      }
    });
   // Get the paths we want to pre-render based on posts

   const portfolio = await client.query({
      query: gql`${portfolioQuerry}`})
 

   //const posts = await res.json()
   const paths = portfolio.data.portfolios.map((page) => ({
      params: { slug: page.company },
    }))


 
   // We'll pre-render only these paths at build time.
   // { fallback: false } means other routes should 404.
   return { paths, fallback: false }
 }
export async function getStaticProps() {
   // Code will go here
   const client = new ApolloClient({
     uri: process.env.GQL_ENDPOINT,
     cache: new InMemoryCache(),
     headers:{
       authorization: process.env.GQL_AUTH
     }
   });
   const nav  = await client.query({
     query: gql`${navigationQuery}`});
   const portfolio = await client.query({
     query: gql`${portfolioQuerry}`})
   const obrazki = await client.query({
      query: gql`${picturesQuerry}`})
 
 
 
   return {
     props: {
       navigationItems: nav.data,
       portfolio: portfolio.data.portfolios,
       images: obrazki.data.projectPictures,      
     }
   }
 }
export default SinglePortfolioPage
