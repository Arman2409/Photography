import React, { useState } from 'react';
import './Process.css';
import './Process.responsive.css';
import Steps from './Steps/Steps'

function Process(){
    // states 
    const [animation,setAnimation] = useState('stop')
    
    //mouseenter for setting start for steps animation 
    function enter(){
        if(animation == 'start'){
            return
        }
        else{
            setAnimation('start')
        setTimeout(()=>{
            setAnimation('stop')
        }, 4150)
        }
    }
    
    return(
       <div className="process-div" onMouseEnter={enter}>
           <div className="process-content">
               <h3 className="process-title">Our working Process</h3>
               <Steps start={animation}/>
           </div>
       </div>
    )
}

export default Process