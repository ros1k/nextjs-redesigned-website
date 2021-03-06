import React,{useContext,useEffect} from 'react'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { StoreContext } from 'store/StoreProvider';
import mainInfoQuerry from 'helpers/graphQLQuerry/info';
import navigationQuery from 'helpers/graphQLQuerry/nav';
import picturesQuerry from 'helpers/graphQLQuerry/pictures';
import portfolioQuerry from 'helpers/graphQLQuerry/portfolio';
import MobileNavigation from 'components/MobileNavigation/MobileNavigation'
import ParticlesBackground from 'components/ParticlesBackground/ParticlesBackground'
import Navigation from 'components/Navigation/Navigation'
import LayoutMain from 'components/Layout1140'
import Layout from 'components/LayoutFluid'

import Contact from 'components/Contact/Contact';
import PageHeader from 'components/PageHeader/PageHeader';
import {motion} from 'framer-motion'




const about = ({images,navigationItems,portfolio,skills,pageTitle}) =>{
  const {setImages, setNavItems, setPortfolio ,setSkills} = useContext(StoreContext)
 

  useEffect(() => {
    setImages(images)
    setNavItems(navigationItems)
    setPortfolio(portfolio)
    setSkills(skills)
  }, [navigationItems,portfolio,skills,images])
  
  return (
      <div exit={{opacity:0,transition:{duration:1}}} initial={{opacity:0}} transition={{duration:1}} animate={{opacity:1}}>
         <motion.div initial={{opacity:0, width:'100vw',height:'100vh'}} animate={{opacity:1,transition:{
        duration:0.5
      }}}
      exit={{opacity:0}}
      className={'particlesBG'}>
        <ParticlesBackground/>
      </motion.div>
        <Layout>
          <Navigation/>
          <LayoutMain>
              <PageHeader title={pageTitle}/>

              <Contact/>
              <MobileNavigation/>
          </LayoutMain>
        </Layout>
      </div>
      
  )
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
  const mainDetails = await client.query({
    query: gql`${mainInfoQuerry}`})
  const obrazki = await client.query({
    query: gql`${picturesQuerry}`})
  const portfolio = await client.query({
    query: gql`${portfolioQuerry}`})
 



  return {
    props: {
      navigationItems: nav.data,
      skills: mainDetails.data.infos[0].mySkills,
      images: obrazki.data.projectPictures,
      portfolio: portfolio.data.portfolios
    }
  }
}

export default about
