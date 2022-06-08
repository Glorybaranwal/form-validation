import React from 'react';

import 'react-multi-carousel/lib/styles.css';
import { BrowserRouter as Router, Switch, 
    Route, Redirect,} from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from '../footer';
import Index from '../index';
import Aside from '../Sidebar/aside';
import Header from '../header'


const Home = () => {

return (
    <>
  <Index/>
  <Aside/>
  <Footer/>
    </>
)

}

export default Home;