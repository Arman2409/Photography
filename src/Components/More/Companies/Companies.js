import React, { useRef } from 'react';
import './Companies.css';
import './Companies.responsive.css';
import Company from './Company/Company';
import CompaniesData from './CompaniesData/CompaniesData';

function Companies(){
    // refs 
    const listDiv = useRef();
    const translate = useRef(0)
    const nextInter = useRef()
    const prevInter = useRef()
    
    // mouseEnter event for next button 
    function Right(){
           nextInter.current = setInterval(() => {
         if(translate.current < -350){
              clearInterval(nextInter.current)
             }
             else{
              translate.current = translate.current - 20
              listDiv.current.style = `transform:translateX(${translate.current}px)`
             }
           }, 50)
    }
    
    // mouseLeave event for next button 
    function stopRight(){
      if(translate.current > -800){
               clearInterval(nextInter.current)
               nextInter.current = null
      }
    }
    // mouseEnter event for previous button 
    function Left(){
        prevInter.current = setInterval(() => {
        if(translate.current > 0){
           clearInterval(prevInter.current)
            console.log('stop');
          }
          else{
        translate.current = translate.current + 20
        listDiv.current.style = `transform:translateX(${translate.current}px)`
        console.log('interval',translate.current);
          }
        }, 50)
 }
  
  // mouseLeave event for next button 
  function stopLeft(){
      if(translate.current < 0){  
            clearInterval(prevInter.current)
       }
 }

    return(
        <div className="companies-div">
        <div className="companies-buttons">
            <button className="company-button" id="company-previous-button" onMouseEnter={Left} onMouseLeave={stopLeft} >
                <i class="fas fa-caret-left button-icon"></i>
            </button>
            <button className="company-button" id="company-next-button" onMouseEnter={Right} onMouseLeave={stopRight}>
                <i class="fas fa-caret-right button-icon"></i>
            </button>
        </div>
        <div className="companies-list">
         <div className="companies-list-div" ref={listDiv}>
           {/* maping companies  */}
           {CompaniesData.map((CompaniesData,index) =>
           <Company key={index} icon={CompaniesData.icon} name={CompaniesData.name} description={CompaniesData.description}/>)}
        </div>
        </div>

     </div>
    )
}

export default Companies