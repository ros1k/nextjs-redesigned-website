import React from 'react'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Navigation from 'components/Navigation/Navigation'
import Head from 'next/head'
import Header from 'components/HomePage/Header/Header';
import Layout from 'components/Layout'
import About from 'components/HomePage/About/About'
import Background from 'components/HomePage/Background/Background'

const Home = ({ navigationItems, skills , images}) =>{
  
  return (
    <>
    <Background />
    <Layout >
        
        {/* <Navigation navigationItems={navigationItems}/> */}
          <main className="container">
              <div className="row">
                <div className="col-12">
                  <Header />
                  <About skills={skills} images={images}/>
                </div>
              </div>
          </main>
    </Layout>
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
  const  nav  = await client.query({
    query: gql`
      query MyQuery {
        navigations(locales: en) {
          id
          name
          locale
          urlSlug
          icon {
            url
          }
        }
      }
    `
  });
  const mainDetails = await client.query({
    query: gql`
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
  })
  const obrazki = await client.query({
    query: gql
    `
    query MyQuery {
      projectPictures {
        for
        obrazki {
          url
        }
      }
    }
    
    `
  })
  


  return {
    props: {
      navigationItems: nav.data,
      skills: mainDetails.data.infos[0].mySkills,
      images: obrazki.data.projectPictures
    }
  }
}
export default Home