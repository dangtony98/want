import React from 'react';
import NavigationBar from '../navigation/NavigationBar';
import HomeContent from '../wrappers/HomeContent';

export default () => {
    window.scrollTo(0, 0);

    return (
        <div className="home-page">
            <NavigationBar />
            <HomeContent />
        </div>
    );
}