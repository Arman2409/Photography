import React, { useEffect ,useRef, useState} from 'react';
import './SlideItem.css';
import './SlideItem.responsive.css'

function SlideItem( { title , subTitle , background , image ,  path }){
  
  // states 
  const [place,setPlace] = useState()
  const [placeButton,setPlaceButton] = useState()
  const [size,setSize] = useState()
  const [border,setBorder] = useState()
  const [placeSub,setPlaceSub] = useState()
  // refs 
  const subTitlePlace = useRef()
  const borderRef = useRef(0)
  const titlePlace = useRef(-350)
  const sizeRef = useRef(0)
  const placeButtonRef = useRef()
  const timing = useRef()
  const timing2 = useRef()
  const inter1 = useRef()
  const inter2 = useRef()
  const inter3 = useRef()
  const inter4 = useRef()
  const inter5 = useRef()
  
  // animation for all slide items 
   useEffect(()=>{

    // setting inital refs for slide items
    borderRef.current = 0
    titlePlace.current = -300
    placeButtonRef.current = -400
    sizeRef.current = 0
    subTitlePlace.current = -500
    
    // setting inital states for slide items
    setBorder(0)
    setPlaceButton(-400)
    setPlace(-300)
    setSize(0)
    setPlaceSub(-500)

    // clearing intervals 
    clearInterval(inter1.current)
    clearInterval(inter2.current);
    clearInterval(inter3.current);
    clearInterval(inter4.current);
    clearInterval(inter5.current);
     
      //  interval for border's size 
       inter1.current = setInterval(()=>{
        if(borderRef.current >= 15){
          clearInterval(inter1.current)
          inter1.current = null 
        }
        else{
         borderRef.current = borderRef.current + 1
         setBorder(borderRef.current)
        }
      }, 500)
      // interval for title's position 
       inter2.current = setInterval(() => {
         if(titlePlace.current >= 0){
          clearInterval(inter2.current)
         }
         else{
             titlePlace.current = titlePlace.current + 5
             setPlace(titlePlace.current)
         }
       }, 5)
      //  interval for button's position 
       inter3.current = setInterval(()=>{
        if(placeButtonRef.current >= 50){
          clearInterval(inter3.current);
        }
        else{
          placeButtonRef.current = placeButtonRef.current + 3
          setPlaceButton(placeButtonRef.current)
        }
       }, 2)
      //  interval for image's size 
       inter4.current = setInterval(()=>{
        if(sizeRef.current >= 250){
          clearInterval(inter4.current);
        }
        else{
          sizeRef.current = sizeRef.current + 1
          setSize(sizeRef.current)
        }
       }, 20)
      //  interval for subtitle's position 
       inter5.current = setInterval(()=>{
        if(subTitlePlace.current >= 35){
          clearInterval(inter5.current);
          inter5.current = null 
        }
        else{
          subTitlePlace.current = subTitlePlace.current + 2
          setPlaceSub(subTitlePlace.current)
        }
       }, 1)
    
  }, [subTitle])   


 return(
        <div className="slide-item-div">
          <img src={background} className="slider-backround-image"></img>
            <div className="slide-item-content">
              <h2 className="slide-title" style={{top:place}}>
                {title}
              </h2>
              <h3 className="slide-sub-title" style={{left:placeSub}}>
                 {subTitle}
              </h3>
              <div className="slider-item-images">
                  <img src={image} className="image" style={{width:size,height:size,borderWidth:border}}></img>
              </div>
              <button className="slide-item-button" style={{left:placeButton}}>
                <a href='https://www.youtube.com/watch?v=WzZ_t1nCsR4' target="blank">
                Take a Look
                </a>
              </button>
            </div>
        </div>
    )
}

export default SlideItem