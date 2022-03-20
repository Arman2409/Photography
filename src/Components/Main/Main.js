import React from 'react';
import Slider from './Slider/Slider';
import Gallery from './Gallery/Gallery';
import Process from './Process/Process';
import Footer from '../Footer/Footer'
import './Main.css'

function Main(){
    return(
        <div className="main-div">
           <Slider />
           <Gallery />
           <Process />
           <Footer />
        </div>
    )
}

export default Main