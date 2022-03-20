import React, { useEffect, useRef, useState } from 'react';
import './Photo.css';
import './Photo.responsive.css'

function Photo( { path ,showPhoto} ){
   
    // refs 
   const clickedPhoto = useRef()
   const demo = useRef()

    return(
        <div className="photo-div">
            <img src={path} className="photo" alt="A photo" onClick={showPhoto}></img>
        </div>
    )
}

export default Photo