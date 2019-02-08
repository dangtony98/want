import React from 'react';
import ModalHandler from '../modal/ModalHandler';
import NavigationBar from '../navigation/NavigationBar';
import HomeContent from '../wrappers/HomeContent';

export default () => {
    window.scrollTo(0, 0);

    return (
        <div className="home-page">
            <ModalHandler />
            <NavigationBar />
            <HomeContent />
        </div>
    );
}