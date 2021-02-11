import React from 'react'

const LayoutMain = ({children }) =>{
  
  return (
    <main className="main container">
       <div className="row">
          <div className="col-12">
             {children}
          </div>
       </div>
    </main>
  )
}
export default LayoutMain