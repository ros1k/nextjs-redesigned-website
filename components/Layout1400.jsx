import React from 'react'

const Layout1400 = ({children }) =>{
  
  return (
    <main className="main container override-1400">
       <div className="row">
          <div className="col-12">
             {children}
          </div>
       </div>
    </main>
  )
}
export default Layout1400