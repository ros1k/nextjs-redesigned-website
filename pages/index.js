import React,{useContext,useEffect} from 'react'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Navigation from 'components/Navigation/Navigation'
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
import { motion, useViewportScroll } from "framer-motion"
import LayoutFluid from 'components/LayoutFluid';

const Home = ({ navigationItems, portfolio, skills , images}) =>{
  const {setImages, setNavItems, setPortfolio ,setSkills} = useContext(StoreContext)
  


  useEffect(() => {
    setImages(images)
    setNavItems(navigationItems)
    setPortfolio(portfolio)
    setSkills(skills)
    
  }, [navigationItems,portfolio,skills,images])
  


  return (
    <>
    <Background />
    <LayoutFluid >
         <Navigation /> 
          <main  >
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
                  <Contact/>
                </div>
              </div>
            </div>
          </main>
    </LayoutFluid>
    </>
   
   
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
export default Home