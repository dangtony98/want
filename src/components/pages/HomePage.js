import React, { Component } from 'react';
import ModalHandler from '../modal/ModalHandler';
import NavigationBar from '../navigation/NavigationBar';
import HomeContent from '../wrappers/HomeContent';
import ChatWidget from '../chat/ChatWidget';
import ChatBox from '../chat/ChatBox';

export default class HomePage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="home-page">
                <ModalHandler />
                <NavigationBar />
                <ChatWidget />
                <ChatBox />
                <HomeContent />
            </div>
        );
    }
}