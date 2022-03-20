import React from 'react';
import './Map.css';
import './Map.responsive.css'

function Map(){
    return(
        <div className="map-div">
            <div className="map-content">
                <div className='map-iframe-div'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.7265754677173!2d-73.99205743136565!3d40.756187987081375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7c9576a3dfabf1c0!2sTimes%20Square%20Hall!5e1!3m2!1sen!2s!4v1622663831223!5m2!1sen!2s" className='map' allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div className="map-description-div">
                   <h3 className="map-title">Our headquarters is located in New York</h3>
                   <p className="map-p">adress:37th St, New York, NY 10018, United States</p>
                   <img src="/assests/contacts/headquarters.jpg" className="headquarters-image"></img>
                </div>
            </div>
        </div>
    )
}

export default Map