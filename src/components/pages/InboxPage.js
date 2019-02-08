import React, { Component } from 'react';
import NavigationBar from '../navigation/NavigationBar';
import InboxPeople from '../inbox/InboxPeople';
import InboxChat from '../inbox/InboxChat';
import Footer from '../footer/Footer';
import { getConvos } from '../../services/api/inbox';

export default class InboxPage extends Component {
    constructor(props) {
        super(props);

        this.handleInboxChat = this.handleInboxChat.bind(this);

        this.state = {
            convos: [],
            current_convo_id: null
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        getConvos((response) => {
            this.setState({
                ...this.state,
                convos: response.data,
                current_convo_id: response.data.length != 0 ? response.data[0].id : null
            }, () => {
                console.log('getConvos() successful with responsex: ');
                console.log(response.data);
            });
        });
    }


    handleInboxChat(convoid) {
        this.setState({
            ...this.state,
            current_convo_id: convoid
        }, () => {
            // EXECUTES AFTER THE CURRENT CONVO ID IS UPDATED
        });
    }

    render() {
        const { convos, current_convo_id } = this.state;
        return (
            <div className="inbox-page wrapper-flex-spaced wrapper-flex-spaced--column">
                <div>
                    <NavigationBar />
                    <div className="inbox-content">
                        <div className="inbox-content__left">
                            {convos.length != 0 &&
                                <InboxPeople 
                                    {...this.state}
                                    handleInboxChat={this.handleInboxChat}
                                />
                            }
                        </div>
                        <div className="inbox-content__right">
                            {current_convo_id ? (
                                <div>
                                    <h4 className="content-heading">Chat</h4>
                                        <InboxChat 
                                            convoid={current_convo_id}
                                        />
                                </div>
                            ) : (
                                <div>
                                    {/* PLACEHOLDER DIV */}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}