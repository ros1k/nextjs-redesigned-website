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

import portfolioQuerry from 'helpers/graphQLQuerry/portfolio';
import SingleSection from 'components/PortfolioPage/SingleSection';

const SinglePortfolioPage = ({ navigationItems, portfolio }) =>{
   const { setNavItems } = useContext(StoreContext)
   const [currentPageData, setCurrentPageData]= useState()
   const [sectionTitles,setSectionTitles] = useState()
   const [sectionDesc,setSectionDesc] = useState()
   const router = useRouter()
   const slug = router.query.slug || []
   console.log();
 

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
      
      console.log(sectionTitles);
      console.log(sectionDesc);
   }


   useEffect(()=>{
      setNavItems(navigationItems)
      getProperPageData()
      getTitlesAndDesc()
   },[navigationItems,currentPageData])

 
   const getProperPageData = () =>{
      portfolio.map((element,i)=>{
        element.company.includes(slug) ? setCurrentPageData(portfolio[i]) : null
      })
     
   }
   return (
      <>
      {currentPageData && 
      <LayoutFluid>
         <Background bgImage={currentPageData.pageImage.url}/>
         <Navigation/>
            <Layout1140>
               <PageHeader 
                     title={currentPageData.website_type.split('_').join(' ')} 
                     isSubPage={true}
                     client={currentPageData.company}
                     isPageOnline={currentPageData.isPageOnline}
                     website={currentPageData.website}
                     />

                     {currentPageData.portfolioDescriptionImage.map((e,i) => {
                        return <SingleSection key={i} url={e.url} side={i%2===0} description={sectionDesc[i]} title={sectionTitles[i]}/>
                     })}
                     
            </Layout1140>
        
      </LayoutFluid>
      }
   </>
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
  
 
 
 
   return {
     props: {
       navigationItems: nav.data,
       portfolio: portfolio.data.portfolios,      
     }
   }
 }
export default SinglePortfolioPage
