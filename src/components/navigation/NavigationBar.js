import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/sample-profile.png';

export default () => (
    <div className="navigation-bar">
        <div>

        </div>
        <div>
            <Link 
                to="/"
                className="navigation-link link"
            >WANT</Link>
        </div>
        <div>
            <Link to="/">
                <img 
                    src={image}
                    className="profile-picture--mini"
                ></img>
            </Link>
        </div>
    </div>
);