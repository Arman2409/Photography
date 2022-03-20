import React from 'react';
import './Description.css';
import './Description.responsive.css';

function Description(){
    return(
        <div className="description-div">
            <h2 className="description-head">About Us</h2>
            <div className="history-div">
               <p className="history-p">
                   Our company was founded in 2011.Since then we have taken different photos of different places and 
                   events.Our best photographers have experience of 8 years.This was our first photo.
               </p>
               <img src="/assests/about/first-photo.jpg" className="first-photo-image"></img>
                <p className="history-p">Since then we have taken thousands of photos from different parts of world especially
                     from USA,UK and South Africa.We have photographers in 5 countries.</p>
            </div>
        </div>
    )
}

export default Description