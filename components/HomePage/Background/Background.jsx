import React from 'react'
import Image from 'next/image'
const Background = () => {
   return (
      <div className="background" style={{position:"absolute",top:80}}>
         <Image src="/background.png" width="1400" height="730"/>
      </div>
   )
}

export default Background
