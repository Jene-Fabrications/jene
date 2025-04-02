 import React from 'react'
 import Tab from './tab'
 import {Owner, Incharge} from './img/img'
 
 const siteIncharge = () => {
   return (
     <div className='site'>
        <Tab 
        title="Owner" 
        description="K. Malathi Gilbert B.Sc., B.Ed."
        imgSrc={Owner}
        imgAlt="Owner"
      />,
      <Tab 
        title="Site Incharge"  
        description="V. John Gilbert Raj S.S.L.C."
        imgSrc={Incharge}
        imgAlt="Incharge"
      />
     </div>
   )
 }
 
 export default siteIncharge