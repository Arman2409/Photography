import React from 'react';
import './Company.css';
import './Company.responsive.css';

function Company({icon , name , description}){
    return(
        <div className="company-div">
            <i className={icon + ' company-icon'}></i>
            <h2 className="company-name">
              {name}
            </h2>
            <p className="description">
                {description}
            </p>
        </div>
    )
}

export default Company