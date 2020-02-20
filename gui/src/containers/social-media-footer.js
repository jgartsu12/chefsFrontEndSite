import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function() {
    return(
        <div className='social-media-footer-container'>
            <div className='Facebook-content-wrapper'>
                <div className='icon'>
                    <a href="https://www.facebook.com/chefstablect/" className='chefs-facebook-page'>
                        <FontAwesomeIcon icon='Facebook'/>
                    </a>
                </div>
            </div>
            <div className='Instagram-content-wrapper'>
                <div className='icon'>
                    <a href="https://www.instagram.com/chefstablect/">
                        <FontAwesomeIcon icon='Instagram'/>
                    </a>
                </div>
            </div>
            <div className='Twitter-content-wrapper'>
                <div className='icon'>
                    <a href="https://twitter.com/ChefsTableCT" className='chefs-twitter-page'>
                        <FontAwesomeIcon icon='Twitter'/>
                    </a>
                </div>
            </div>
        </div>
    );
}