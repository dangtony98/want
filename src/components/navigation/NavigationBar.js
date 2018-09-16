import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <div className="navigation-bar">
        <div>
            <Link 
                to="/"
                className="navigation-link link"
            >WANT</Link>
        </div>
    </div>
);