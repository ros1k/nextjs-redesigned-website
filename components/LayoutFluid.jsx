import React from 'react'

const LayoutFluid = ({children }) =>{
  
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
export default LayoutFluid