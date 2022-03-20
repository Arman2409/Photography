import React from 'react';
import './More.css';
import './More.responsive.css';
import Footer from '../Footer/Footer';
import Companies from './Companies/Companies'

function More(){
    return (
        <div className="more-div">
           <div className="more-div-content">
               <h2 className="more-title">
                   Companies we cooperate with
                </h2>
               <Companies />
           </div>
           <Footer />
        </div>
    )
}

export default More
