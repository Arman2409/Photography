import React from 'react';
import Description from './Description/Description';
import Footer from '../Footer/Footer';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function About(){
    return(
        <div className="about-div">
            <Description />
            <Footer />
        </div>
    )
} 

export default About