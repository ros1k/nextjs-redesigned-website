import React from 'react'

const Layout = ({children }) =>{
  
  return (
    <div className="container-fluid">
       <div className="row">
          <div className="col-12">
             {children}
          </div>
       </div>
    </div>
  )
}
export default Layout