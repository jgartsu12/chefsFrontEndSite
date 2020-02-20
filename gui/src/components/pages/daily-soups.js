import React from 'react';
import axios from 'axios';

export default function() {
    return (
        <div className='daily-soups-container'>
            <div className='daily-soups-header'>
                <h1>Today's Soups:</h1>
                <h2>Updated: date and time stamped upon update</h2>
                <h3>Served With Our Artisan Sourdough Bread</h3>
            </div>
            <div className='daily-soups-prices-wrapper'>
                <h3>8 oz: $4.00</h3>
                <h3>16oz: $6.80</h3>
                <h3>32oz: $12.06</h3>
                <h1> 1/2 Wrap/Soup Combo</h1>
                <h2> 1/2wrap small soup = price</h2>
                <h2> 1/2wrap medium soup = price</h2>
            </div>
            <div className='daily-soups-content-wrapper'>
                {/* use axios to get soups here with site manager */}
                <div className='soups-list'>
                    <ul>
                        <li>{this.props.soup_name}</li>
                        <li>{this.props.soup_name}</li>
                        <li>{this.props.soup_name}</li>
                        <li>{this.props.soup_name}</li>
                        <li>{this.props.soup_name}</li>
                        <li>{this.props.soup_name}</li>
                        <li>{this.props.soup_name}</li>
                        <li>{this.props.soup_name}</li>
                        <li>{this.props.soup_name}</li>
                        <li>{this.props.soup_name}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}