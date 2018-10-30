import React from 'react';
import SignupBox from './SignupBox';

export default () => (
    <div className="promo-box">
        <div className="promo-box__group marg-t-m">
            <h3 className="promo-heading">Be a Wanter</h3>
            <p className="promo-text">Delegate tasks to others around you or Want-registered professionals</p>
        </div>
        <div className="promo-box__group">
            <h3 className="promo-heading">Be a Fulfiller</h3>
            <p className="promo-text marg-b-m">Make money by fulfilling local tasks. We'll recommend tasks that suit your interests</p>
        </div>
        <hr className="hr"></hr>
        <div className="promo-box__group marg-t-m">
            <p className="promo-text">"I want someone to clean my apartment"</p>
        </div>
        <div className="promo-box__group">
            <p className="promo-text">"I want someone to buy and deliver coffee"</p>
        </div>
        <SignupBox />
    </div>
);