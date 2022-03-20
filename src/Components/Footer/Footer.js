import React from 'react';
import './Footer.css';
import './Footer.responsive.css'

function Footer(){
    return(
        <div className="footer-div">
            <div className="footer-content">
                    <div className="adress-div">
                       <p className="adress-p">
                          37th St, New York, NY 10018, United States. 
                          +1-123-456-7890
                       </p>
                    </div>
                    <div className="links-div">
                       <a href="https://www.facebook.com/" className="link-a" target="blank">
                           <i class="fab fa-facebook link-icon"></i>
                       </a>
                       <a href="https://telegram.org/" className="link-a" target="blank">
                       <i class="fab fa-telegram link-icon"></i>
                       </a>
                       <a href="https://www.pinterest.com/" className="link-a" target="blank">
                          <i class="fab fa-pinterest link-icon"></i>
                       </a>
                    </div>
                    <div className="rights-div">
                          <p className="rights-p">
                            © 2021 Ghazaryan Arman.All rights reserved.
                          </p> 
                    </div>
            </div>
        </div>
    )
}

export default Footer