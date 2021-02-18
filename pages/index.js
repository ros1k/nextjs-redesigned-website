import React,{useContext,useEffect} from 'react'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Navigation from 'components/Navigation/Navigation'
import MobileNavigation from 'components/MobileNavigation/MobileNavigation'
import Head from 'next/head'
import Header from 'components/HomePage/Header/Header';
import Layout from 'components/LayoutFluid'
import About from 'components/HomePage/About/About'
import Background from 'components/Background/Background'
import Portfolio from 'components/HomePage/Portfolio/Portfolio';
import Contact from 'components/Contact/Contact';
import { StoreContext } from 'store/StoreProvider';
import mainInfoQuerry from 'helpers/graphQLQuerry/info';
import navigationQuery from 'helpers/graphQLQuerry/nav';
import picturesQuerry from 'helpers/graphQLQuerry/pictures';
import portfolioQuerry from 'helpers/graphQLQuerry/portfolio';
import { motion } from "framer-motion"
import LayoutFluid from 'components/LayoutFluid';
import ParticlesBackground from 'components/ParticlesBackground/ParticlesBackground';

const Home = ({ navigationItems, portfolio, skills , images, info}) =>{
  const { setInfo,setImages, setNavItems, setPortfolio ,setSkills,transition} = useContext(StoreContext)
  


  useEffect(() => {
    setImages(images)
    setNavItems(navigationItems)
    setPortfolio(portfolio)
    setSkills(skills)
    setInfo(info)
    
  }, [navigationItems,portfolio,skills,images,info])
  

  return (
    <motion.div 
      initial={{opacity:1}} 
      animate={{opacity:1}}
      transition={{
      duration:0.5,
      delay:0.2}} 
      exit={{opacity:0}} 
      > 
      <motion.div initial={{opacity:0, width:'100vw',height:'100vh'}} animate={{opacity:1,transition:{
        duration:0.5
      }}}
      exit={{opacity:0}}
      className={'particlesBG'}>
        <ParticlesBackground/>
      </motion.div>
     
      
      <LayoutFluid >
          <Navigation /> 
            <motion.main  
            initial={{opacity:1}} 
            animate={{opacity:1}}
            transition={{
            duration:0.5,
            delay:0.2}} 
            exit={{opacity:0}} 
            >
              <div className="container">
              <div className="row">
                  <div className="col-12">
                    <Header />
                    <About />
                  </div>
                </div>
              </div>
                <div className="container override-1400">
                  <div className="row">
                    <div className="col-12">
                      <Portfolio />
                    </div>
                  </div>
                </div>
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <Contact customValues={[-0.03, -0.15]}/>
                  </div>
                </div>
              </div>
              <MobileNavigation/>
            </motion.main>
      </LayoutFluid>
    </motion.div>
   
   
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
      info: mainDetails.data.infos,
      images: obrazki.data.projectPictures,
      portfolio: portfolio.data.portfolios
    }
  }
}
export default Home