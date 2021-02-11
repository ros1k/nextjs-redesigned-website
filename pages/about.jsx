import React from 'react'
import Navigation from 'components/Navigation/Navigation'
import LayoutMain from 'components/LayoutMain'





const about = ({ navigationItems }) =>{
  
  return (
       <Layout>
         <Navigation navigationItems={navigationItems}/>
         <LayoutMain>
           
         </LayoutMain>
        </Layout>
  )
}
export default about