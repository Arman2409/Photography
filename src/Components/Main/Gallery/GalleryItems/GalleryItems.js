import React, { useEffect, useRef, useState } from 'react';
import './GalleryItems.css';
import './GalleryItems.responsive.css';
import GalleryImages from './GalleryImages/GalleryImages';
import Photo from './Photo/Photo';
import Instruction from './Instruction/Instruction';

function GalleryItems( { showPhoto } ){
   
   // refs 
    const photoTypeRef = useRef(0)
    const k = useRef()
    const clicked = useRef()
    const delay = useRef()
    const divs = useRef()
   //  states 
    const [photoType,setPhotoType] = useState(GalleryImages[0])
    const [download,setDownload] = useState('')

   //  setting gallery images type 
    function setPaysage(event){
      photoTypeRef.current = 0
      setPhotoType(GalleryImages[photoTypeRef.current])
    }
    function setMountains(event){
       photoTypeRef.current = 1
       setPhotoType(GalleryImages[photoTypeRef.current])
    }
    function setRivers(event){
       photoTypeRef.current = 2
       setPhotoType(GalleryImages[photoTypeRef.current])
    }
    function setElse(event){
        photoTypeRef.current = 3
        setPhotoType(GalleryImages[photoTypeRef.current])
     }

   //   setting color of clicked images type 
     useEffect(()=>{
        divs.current = document.querySelectorAll('.choose-div')
        divs.current.forEach((elem,ind,all)=>{
           elem.style.backgroundColor = "#96EED7";
           console.log('do');
        })
        clicked.current = divs.current[photoTypeRef.current]
        console.log(clicked.current);
        clicked.current.style.backgroundColor = "#26e46f"
     }, [photoTypeRef.current])
    
   //   loading instruction 
     useEffect(()=>{
       setDownload('show');
       delay.current = setTimeout(()=>{
          setDownload('')
       }, 500)
     
     }, [photoType])
     
    return(
       <div className="gallery-items-div">
            <div className="choosing-type-div">
                   <div className="choose-div" onClick={setPaysage}>
                       <p>
                           Paysage
                      </p>
                   </div>
                   <div className="choose-div" onClick={setMountains}>
                      <p>
                          Mountains
                      </p>
                   </div>
                   <div className="choose-div" onClick={setRivers}>
                       <p>
                           Rivers
                       </p>
                   </div>
                   <div className="choose-div" onClick={setElse}>
                       <p>
                          Else
                       </p>
                   </div>
            </div>
            <div className="photos-div">
                {/* maping gallery's photos  */}
                {photoType.map((photoType,index) =>
                <Photo key={index} path={photoType.path} showPhoto={showPhoto} />)}
                {/* toggling loading instruction component */}
                {download == 'show' ? <Instruction title="Loading..."/> : null}
            </div>
         </div>
    )
}

export default GalleryItems