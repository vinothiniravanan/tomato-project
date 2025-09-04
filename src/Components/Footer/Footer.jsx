import React from 'react'
import './Footer.css'
import { assets } from '../../assets/fontend images/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
              <img src={assets.logo} alt=""/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, doloremque rerum quod laborum facere quaerat sit. Dolores illo doloribus sunt sequi quae dicta illum, molestias aliquam odit vero, consequuntur molestiae.</p>
              <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="facebook"/>
                <img src={assets.twitter_icon} alt="facebook"/>
                <img src={assets.linkedin_icon} alt="facebook"/>
                 </div>
            </div>
            <div className="footer-content-center">
             <h2>COMPANY</h2>
             <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
             </ul>

            </div>
            <div className="footer-content-right">
              <h2>GET IN TOUCH</h2>
              <ul>
                <li>+123 567 789 </li>
                <li>contact@tomato.com</li>
              </ul>
            </div>
        </div>
        <hr/>
        <p className='footer-copyright'>Copyright 2025 @ Tomato.com -All Right Reserved.</p>
    </div>
  )
}

export default Footer
