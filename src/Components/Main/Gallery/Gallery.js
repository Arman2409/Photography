import React, { useRef } from 'react';
import {useState ,useEffect} from 'react'
import './Gallery.css';
import './Gallery.responsive.css';
import GalleryItems from './GalleryItems/GalleryItems';

function Gallery(){
    
    // states 
    const [photoHref,setPhotoHref] = useState(null)
    // refs 
    const galleryRef = useRef()
    const demoRef = useRef()
    const imageRef = useRef('image')
    const gallery = useRef()
    const closeDiv = useRef()
    
    // getting image src for demo 
    function showPhoto(event){
        setPhotoHref(event.target.src)
        console.log(photoHref);
    }
    function closePhoto(){
        setPhotoHref(null)
    }
    
    // showing the demo image 
    useEffect(()=>{
      if(photoHref !== null){
          galleryRef.current.style = "display:none;"
          demoRef.current.style = "display:flex"
          closeDiv.current.style = "display:block"
          imageRef.current = document.createElement('img')
          imageRef.current.setAttribute('class','demo-image')
          imageRef.current.setAttribute('src',photoHref)
          demoRef.current.appendChild(imageRef.current)
       }
       if(photoHref == null){
        galleryRef.current.style = "display:flex;"
        demoRef.current.style = "display:none"
        demoRef.current.innerHTML = ''
        closeDiv.current.style = "display:none"
       }
    }, [photoHref])

    return(
        <div className="gallery-div" ref={gallery} >
            <div className="gallery-content" ref={galleryRef}>
            <h2 className="gallery-title">
                Look through our gallery
            </h2>
            <GalleryItems showPhoto={showPhoto} />
            </div>
            <div className="demo" ref={demoRef}>
             
            </div>
            <div className="close-div" ref={closeDiv}>
                   <img src="/assests/gallery/preview.png" className="close-image" onClick={closePhoto}></img>
             </div>
        </div>
    )
}

export default Gallery