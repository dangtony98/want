import React from 'react';
import NavigationBar from '../navigation/NavigationBar';
import InboxPeople from '../inbox/InboxPeople';
import InboxChat from '../inbox/InboxChat';
import Footer from '../footer/Footer';

export default () => {
    return (
        <div className="inbox-page">
            <NavigationBar />
            <div className="inbox-content">
                <div className="inbox-content__left">
                    <InboxPeople />
                </div>
                <div className="inbox-content__right">
                    <InboxChat />
                </div>
            </div>
            <Footer />
        </div>
    );
}

