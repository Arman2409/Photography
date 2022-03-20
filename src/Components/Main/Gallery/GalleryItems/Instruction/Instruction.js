import React from 'react';
import './Instruction.css';

function Instruction( { title }){
    return(
        <div className="instruction-div">
            <h5 className="instruction-title">{title}</h5>
        </div>
    )
}

export default Instruction