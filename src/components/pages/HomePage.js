import React from 'react';
import NavigationBar from '../navigation/NavigationBar';
import HomeContent from '../wrappers/HomeContent';
import ChatWidget from '../chat/ChatWidget';
import ChatBox from '../chat/ChatBox';

export default () => (
    <div className="home-page">
        <NavigationBar />
        <ChatWidget />
        <ChatBox />
        <HomeContent />
    </div>
);