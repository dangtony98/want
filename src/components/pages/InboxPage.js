import React, { Component } from 'react';
import NavigationBar from '../navigation/NavigationBar';
import InboxPeople from '../inbox/InboxPeople';
import InboxChat from '../inbox/InboxChat';
import Footer from '../footer/Footer';

export default class InboxPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            conversations: [{
                conversation_id: 1,
                updated_at: 'XYZ',
                user: {
                    first_name: 'Lisa',
                    profile_picture: 'XYZ'
                },
                want: {
                    id: 2,
                    title: 'I need XYZ'
                }
            }, {
                conversation_id: 2,
                updated_at: 'XYZ',
                user: {
                    first_name: 'Matthew',
                    profile_picture: '/avatar/XYZ'
                },
                want: {
                    id: 2,
                    title: 'I need XYZ'
                }
            }]
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);

        // FETCH CURRENT CONVERSATIONS
    }

    render() {
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
}