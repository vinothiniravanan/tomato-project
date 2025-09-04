import React from 'react'
import headerImg from '../assets/header_img.png';

import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className='header-contents'>
            <h1>Order Your  Favorite Food</h1>
            <p>Best Food</p>
            <button>View Menu</button>
           <div
      className="header"
      style={{ backgroundImage: `url(${headerImg})` }}
    >
      {/* content */}
    </div>
            
        </div>
      
    </div>
  )
}

export default Header
