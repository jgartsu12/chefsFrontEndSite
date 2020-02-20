import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactPagePicture from "../../../static/assets/images/restaurant-bldg-image.jpg";

export default function() {
    return(
        <div className='contact-page-wrapper'>
        
            <div className='contact-page-header'>
                <h1>Contact Us</h1>
            </div>

            <div
                className="left-column"
                style={{
                    background: "url(" + ContactPagePicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            />

            <div className='right-column'>
                <div className="contact-bullet-points">
                    
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="phone" />
                        </div>
                        <div className="text">(203)-255-1779</div>
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="envelope" />
                        </div>
                        <div className="text">chefstable@gmail.com</div>
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="map-marked-alt" />
                        </div>
                        <div className="text">1138 Post Rd, Fairfield, CT 06824 </div>
                    </div>
                </div>
            </div>
        </div>
    );
}