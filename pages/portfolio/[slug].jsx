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

const SinglePortfolioPage = ({ navigationItems, portfolio }) =>{
   const { setNavItems} = useContext(StoreContext)
   const [currentPageData, setCurrentPageData]= useState()
   
   const router = useRouter()
   const slug = router.query.slug || []
   useEffect(()=>{
      setNavItems(navigationItems)
      getProperPageData()
   },[navigationItems,currentPageData])
   console.log(portfolio);
   
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
                     <section className={classnames(style.description,{
                        [style.left]: true
                     })}>
                           <div className={style['description-content']}>
                              <h2>project description is here #1</h2>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat augue et orci euismod hendrerit. 
                                 Phasellus sollicitudin nisl commodo rutrum efficitur. Ut elementum tincidunt nibh, nec tristique odio interdum vel. 
                                 Vestibulum nulla odio, tempor id tempus eu, mollis at diam. Pellentesque laoreet pulvinar lectus vel ornare. </p>
                           </div>
                           <div className={style['description-image']}>
                              <img src={portfolio[1].portfolioDescriptionImage[0].url}alt=""/>
                           </div>
                     </section>
                     <section className={classnames(style.description,{
                        [style.right]: true
                     })}>
                           <div className={style['description-content']}>
                              <h2>project description is here #1</h2>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat augue et orci euismod hendrerit. 
                                 Phasellus sollicitudin nisl commodo rutrum efficitur. Ut elementum tincidunt nibh, nec tristique odio interdum vel. 
                                 Vestibulum nulla odio, tempor id tempus eu, mollis at diam. Pellentesque laoreet pulvinar lectus vel ornare. </p>
                           </div>
                           <div className={style['description-image']}>
                              <img src={portfolio[1].portfolioDescriptionImage[1].url} alt=""/>
                           </div>
                     </section>
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
