import React from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function(){
    return(
        <div className='location-hours-container'>
            <div className='location-wrapper'>
                <div className='left-column'>
                    <div className='location-header'>
                        <div className='center-column'>
                            <h4>We Are located at:</h4>
                            <h5>1138 Post Rd</h5>
                            <h5>Fairfield, CT</h5>
                            <h5>06824</h5>
                            {/* render google maps */}
                            {/* map icon */}
                        </div>
                    </div>
                </div>
            </div>
            {/* dividing line to break page from left and right flexbox css grid?? */}
            <div className='hours-wrapper'>
                <div className='right-column'>
                    <div className='hours-header'>
                        <div className='center-column'>
                        {/* clock icon */}
                            <h1>Chef's Table is Open:</h1>
                            <h4>Monday Thru Saturday 7AM - 9PM</h4>
                            <h4>Sunday 7:30AM - 8PM</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}