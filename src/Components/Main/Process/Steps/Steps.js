import React, { useEffect, useRef, useState } from 'react';
import './Steps.css'
import './Steps.responsive.css';

function Steps({ start }){
  
  // refs 
   const step1 = useRef()
   const step2 = useRef()
   const step3 = useRef()
   const step4 = useRef()
   const arrow1 = useRef()
   const arrow2 = useRef()
   const arrow3 = useRef()
   const timer = useRef()
   const timing1 = useRef()
   const timing2 = useRef()
   const timing3 = useRef()
   const timing4 = useRef()
   const timing5 = useRef()
   const timing6 = useRef()
   const timing7 = useRef()
   const timing8 = useRef()
   const timing9 = useRef()
   const scrolling = useRef()
  //  states 
   const [status,setStatus] = useState('stop')

  //steps animation 
  useEffect(()=>{
    if(start == "start"){
      timer.current = setTimeout(()=>{
        timing1.current = setTimeout(()=>{
          step1.current.style = "background-color:purple;"   
        },100)
       timing2.current =  setTimeout(()=>{
         arrow1.current.style.color = "purple"   
       },600)
       timing3.current = setTimeout(()=>{
         step1.current.style = "background-color:96EED7;"   
         step2.current.style = "background-color:purple;"   
       },1100)
       timing4.current =  setTimeout(()=>{
         arrow1.current.style.color = "#5666A0"  
         arrow2.current.style.color = "purple"   
       },1600)
       timing5.current = setTimeout(()=>{
         step2.current.style = "background-color:96EED7;"   
         step3.current.style = "background-color:purple;"   
       },2100)
       timing6.current = setTimeout(()=>{
         arrow2.current.style.color = "#5666A0"  
         arrow3.current.style.color = "purple"   
       },2600)
       timing7.current = setTimeout(()=>{
         step3.current.style = "background-color:96EED7;"   
         step4.current.style = "background-color:purple;"   
       },3100)
       timing8.current = setTimeout(()=>{
         arrow3.current.style.color = "#5666A0"   
       },3600)
       timing9.current =  setTimeout(()=>{
         step4.current.style = "background-color:96EED7;"      
       },4100)
      },50)  
    }
      setStatus('closed')
  }, [start])
     
    return(
        <div className="steps-div" >
            <div className="steps-content-1">
                    <ul className="steps-ul"> 
                        <li className="steps-li" id="steps-li-1" ref={step1}><i class="fas fa-step-forward li-icon"></i>Taking the order</li>
                        <li className="steps-li" id="steps-li-2" ref={step2}><i class="fas fa-step-forward li-icon"></i>Taking the photos</li>
                        <li className="steps-li" id="steps-li-3" ref={step3}><i class="fas fa-step-forward li-icon"></i>Editing the photos</li>
                        <li className="steps-li" id="steps-li-4" ref={step4}><i class="fas fa-step-forward li-icon"></i>Sending them to the client</li>
                    </ul>
            </div>
             <div className="steps-content-2">
                 <div className="a-step-div" id="step-div-1">
                     <i class="far fa-handshake step-icon" id="handshake1-icon"></i>
                     <i class="fas fa-hands-helping step-icon" id="handshake2-icon"></i>
                 </div>
                   <div className="arrow-div" id="arrow-div-1">
                      <i class="fas fa-angle-double-right arrow-icon" ref={arrow1}></i>
                   </div>
                 <div className="a-step-div" id="step-div-2">
                     <i class="fas fa-image step-icon" id="image-icon"></i>
                     <i class="fas fa-images step-icon" id="images-icon"></i>
                 </div>
                   <div className="arrow-div" id="arrow-div-2">
                      <i class="fas fa-angle-double-right arrow-icon" ref={arrow2}></i>
                   </div>
                 <div className="a-step-div" id="step-div-3">
                     <i class="fas fa-edit step-icon" id="edit1"></i>
                     <i class="fas fa-user-edit step-icon"  id="edit2"></i>
                 </div>
                   <div className="arrow-div" id="arrow-div-3">
                      <i class="fas fa-angle-double-right arrow-icon" ref={arrow3}></i>
                   </div>
                 <div className="a-step-div" id="step-div-4">
                     <i class="fas fa-envelope step-icon" id="envelope1"></i>
                     <i class="fas fa-envelope-open-text step-icon" id="envelope2"></i>
                 </div>
                 {/* <div className="arrow-div" id="arrow-div-4">
                      <i class="fas fa-angle-double-right arrow-icon"></i>
                   </div> */}
             </div>
        </div>
    )
}

export default Steps