import React , { useState } from 'react'
import {Link} from 'react-router-dom';
import Templates from './Templates';
 
function Home() {
    function handleClick(){
    }
  return (
    <div>
      <h1>imran mandal</h1>
      <Link to={{pathname: "/template", state:{name: "template1"}}}>
          <img className="template-img" src="https://www.jodilogik.com/wordpress/wp-content/uploads/2017/11/Hindu-marriage-biodata-for-a-boy.jpg" alt="template1"/>
      </Link>
      <Link to={{pathname: "/template", state:{name: "template2"}}}>
          <img className="template-img" src="https://photoadking.com/images/template-images/biodata/4-7hgjj74973dc27.webp" alt="template1"/>
      </Link>
        
    </div>
  )
}
 
export default Home
 