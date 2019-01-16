import React from 'react';
import NavigationBar from '../navigation/NavigationBar';
import InboxPeople from '../inbox/InboxPeople';
import InboxChat from '../inbox/InboxChat';
import Footer from '../footer/Footer';

export default () => {
    window.scrollTo(0, 0);
    return (
        <div className="inbox-page wrapper-flex-spaced wrapper-flex-spaced--column">
            <div>
                <NavigationBar />
                <div className="inbox-content">
                    <div className="inbox-content__left">
                        <InboxPeople />
                    </div>
                    <div className="inbox-content__right">
                        <InboxChat />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

