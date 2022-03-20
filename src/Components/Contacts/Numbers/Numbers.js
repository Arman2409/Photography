import React from 'react';
import './Numbers.css';
import './Numbers.responsive.css';
import NumbersData from '../NumbersData/NumbersData'


function Numbers(){
    return(
    <div className="numbers-div">
         <h2 className="contacts-title">
          Here are our numbers in case you want to <br></br> get in touch with us
           </h2>
           <div className="numbers-content-div">
           <ul>
               {/* maping numbers for different countries  */}
            {NumbersData.map((NumbersData,index) => 
           <li className="number-li" key={index}>
           <img src={NumbersData.path} className="country-image"></img>
           <h6 className="country">
           {NumbersData.country}
          </h6>
          <p className="number">
           {NumbersData.number}
          </p>
         </li>
        )}
    </ul>
   </div>
  </div>
    )
}

export default Numbers