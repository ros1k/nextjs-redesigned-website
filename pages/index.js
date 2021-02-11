import React,{useState,useContext,useEffect} from 'react'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Navigation from 'components/Navigation/Navigation'
import Head from 'next/head'
import styles from 'styles/Home.module.scss'
import {StoreContext} from 'helpers/StoreProvider'




const Home = ({ navigationItems }) =>{
  
  return (
    <div className={styles.container}>
        <Navigation navigationItems={navigationItems}/>
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




  return {
    props: {
      navigationItems: nav.data
    }
  }
}
export default Home