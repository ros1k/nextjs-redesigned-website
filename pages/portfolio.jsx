import React,{useContext,useEffect} from 'react'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { StoreContext } from 'store/StoreProvider';
import mainInfoQuerry from 'helpers/graphQLQuerry/info';
import navigationQuery from 'helpers/graphQLQuerry/nav';
import picturesQuerry from 'helpers/graphQLQuerry/pictures';
import portfolioQuerry from 'helpers/graphQLQuerry/portfolio';
import MobileNavigation from 'components/MobileNavigation/MobileNavigation'

import Navigation from 'components/Navigation/Navigation'
import LayoutMain from 'components/Layout1400'
import Layout from 'components/LayoutFluid'
import PageHeader from 'components/PageHeader/PageHeader';
import Contact from 'components/Contact/Contact';
import Background from 'components/Background/Background';
import PortfolioPage from 'components/PortfolioPage/PortfolioPage';
import { motion } from 'framer-motion';
import ParticlesBackground from 'components/ParticlesBackground/ParticlesBackground'
import Footer from 'components/Footer/Footer';




const portfolio = ({allImages,navigationItems,portfolio,skills,pageTitle}) =>{
  const {setImages,images, setNavItems, setPortfolio ,setSkills} = useContext(StoreContext)


  useEffect(() => {
    setImages(allImages)
    setNavItems(navigationItems)
    setPortfolio(portfolio)
    setSkills(skills)
  }, [navigationItems,portfolio,skills,images])

  
  return (
      <div exit={{opacity:0}} initial={{opacity:0}} transition={{duration:1}} animate={{opacity:1}}>
         <motion.div initial={{opacity:0, width:'100vw',height:'100vh'}} animate={{opacity:1,transition:{
        duration:0.5
      }}}
      exit={{opacity:0,transition:{duration:1}}}
      className={'particlesBG'}>
        <ParticlesBackground/>
      </motion.div>
       <Layout>
         <Background bgImage={images?images[2].obrazki[0].url:null}/>
         <Navigation/>
          <LayoutMain isStretched={true}>
              <PageHeader title={pageTitle} delay={0.7} backgroundImage={images?images[2].obrazki[0].url:null}/>
              <PortfolioPage />
              <Contact/>
              <Footer/>
          </LayoutMain>
        </Layout>
        <MobileNavigation/>
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
      allImages: obrazki.data.projectPictures,
      portfolio: portfolio.data.portfolios
    }
  }
}

export default portfolio