import React, { useRef, useState } from 'react';
import './Slider.css';
import './Slider.responsive.css'
import SlideItem from './SlideItem/SlideItem';
import SliderData from './SliderData/SliderData'

function Slider(){
    
    // states 
    const [masiv,setMasiv] = useState(SliderData)
    const [chosenSlide,setChosenSlide] = useState(masiv[0])
    // refs 
    const order = useRef(0)
   
//    previous button click event 
   function prev(){
       if(order.current == 0){
          order.current = 2
       }
       else {
          order.current = order.current - 1
       }
       setChosenSlide(masiv[order.current])
   }
   
//    next button click event 
   function next(){
     if(order.current == 2){
        order.current = 0
     }
     else {
        order.current = order.current + 1
     }
     setChosenSlide(masiv[order.current])
   }

    return(
        <div className="slider-div">
            <div className="slider-buttons-div">
                <button className="slider-button" id="previous-button" onClick={prev}>
                    <img src="/assests/buttons/slide.png" className="change-image"></img>
                </button>
                <button className="slider-button" id="next-button" onClick={next}>
                <img src="/assests/buttons/slide.png" className="change-image"></img>
                </button>
            </div>
            <div className="slider-content">
               <SlideItem title={chosenSlide.title} subTitle={chosenSlide.subTitle} background={chosenSlide.background} image={chosenSlide.img} path={chosenSlide.path} />
            </div>
        </div>
    )
}

export default Slider