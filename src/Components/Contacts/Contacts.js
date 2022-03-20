import React from 'react';
import './Contacts.css';
import Numbers from './Numbers/Numbers';
import Map from './Map/Map'
import Footer from '../Footer/Footer'

function Contacts(){
    return(
        <div className="contacts-div">
             <Numbers />
             <Map />
             <Footer />
        </div>
    )
}

export default Contacts