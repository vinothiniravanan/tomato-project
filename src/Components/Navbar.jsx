import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../assets/fontend images/assets'
import { Link } from "react-router-dom";
import { StoreContext } from '../Context/StoreContext';

const Navbar = ({setShowLogin}) => {

  const [menu,setMenu]=useState("home");
 
  const {getTotalCartAmount} =useContext(StoreContext);

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="logo" className='logo'/></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("home")} className={menu=="home"?"active":""}>home</Link>
        <a href='#explore-menu'onClick={()=>setMenu("menut")} className={menu=="about"?"active":""}>menu</a>
        <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu=="mobile-app"?"active":""}>mobile-app</a>
       <a  href='#footer' onClick={()=>setMenu("contact-us")} className={menu=="contact-us"?"active":""}> contact us</a>
        </ul>
        <div className='navbar-right'>
            <img src={assets.search_icon} alt="search"/>
         <div className='navbar-search-icon'>
            <Link to='/cart'><img src={assets.basket_icon} alt="search"/></Link>
         <div className={getTotalCartAmount()===0?"":"dot"}></div>

</div>
 <button onClick={()=>setShowLogin(true)}>Sign in</button>
        </div>
              </div>
  )
}
    
export default Navbar
