import React from 'react';
import {footer} from './Style.css'
import Logo from '.././images/logo.jpg'
import {Router, Routes, Route} from "react-router-dom";
import { Link } from "react-router-dom";
import './Style.css'

const Footer = () => {
   return (
<div className='footer'>
    <div className='container'>
        <div className='row'>
            <div className='col-lg-4 col-md-4 col-xs-6 col-sm-12'>
            <div className='p20'><img src={Logo} alt="logo" style={{height:'70px', width:'120px'}}/>
               <p> In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to <a href="index.js">read more</a></p>
               </div>
            </div>
            <div className='col-lg-4 col-md-4 col-xs-6 col-sm-6'>
               <p> <a href="#">Home</a></p>
               <p> <a href="#">Services</a></p>
               <p> <a href="#">Testimonial</a></p>
               
            </div>
            <div className='col-lg-4 col-md-4 col-xs-6 col-sm-6'>
               <p> <a href="#">Blog</a></p>
               
               <p> <a href="#">Services</a></p>
               <p> <a href="#">Contact us</a></p>
            </div>
        </div>
    </div>
</div>
   )
}

export default Footer;