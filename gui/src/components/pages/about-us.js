import React from "react";

import RichPic from "../../../static/assets/images/rich-bread.jpg";

export default function() {
    return(
        <div className="content-page-wrapper">
            <div className="about-us">
                <div className='center-column'>
                    <div className="about-us-header">
                        <h1>Welcome to The Chefs Table, an ever evolving melting pot of food, music, and art.</h1>
                    </div>

                    <div className='Rich-pic'>
                        <RichPic />
                    </div>
                
                    <div className="about-us-description">
                        <p>The Chefs Table began as a small gourmet take out operation in 1995. 
                           Started by Culinary Institute of America grad Richard Herzfeld, It has grown, evolved,
                            and merged into what has become one of Fairfield Counties premier eatery and rock and 
                            roll outlets.  Boasting 10 hot soups a day, a tossed salad bar, a gourmet salad bar, 
                            a panini bar, and a coffee bar, as well as live music during lunch and dinner 7 days
                             a week, and walls adorned with rock and roll art and vinyl records. </p>
                        <br />
                        <br />
                        <p>The Chefs Table will certainly enlighten your senses and help you forget your worries. 
                         We cordially invite you to join us, 7 days a week, into a place that is as laid back as it 
                         appears. You never know who just might show up...</p>
                    </div>
                    <div className='hours-header'>
                        <h4>HOURS</h4>
                    </div>
                    <div className='hours-of-operation'>
                        <ul>
                            <li>Monday thru Saturday We Are Open From 7AM to 9PM</li>
                            <li>Sunday: 7AM to 8PM</li>
                        </ul>
                    </div>
                    <div className='ubereats-info-wrapper'>
                        <div className='ubereats-header'>
                            <h2>We are Available on UberEats</h2>
                        </div>
                        <div className='icon'>
                            <FontAwesomeIcon icon="uber" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}