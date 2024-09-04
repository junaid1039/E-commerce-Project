import React from 'react';
import './newsletter.css';

const Newsletter = () => {

    return (
        <div className="newsletter">
            <div className="sub-newsletter">
                <h1>Get Exclusive Offer on Your Mail</h1>
                <p>Subscribe to our NewsLetter and Stay Updated</p>
                <div>
                    <input placeholder=' Enter your Mail' type="email" />
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    )
};

export default Newsletter;