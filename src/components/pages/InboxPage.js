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
        this.handleInboxPeopleOrder = this.handleInboxPeopleOrder.bind(this);

        this.state = {
            convos: [],
            current_convo_id: null
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        getConvos((response) => {
            console.log('getConvos response: ');
            console.log(response);
            this.setState({
                ...this.state,
                convos: response.data,
                current_convo_id: response.data.length != 0 ? response.data[0].id : null
            }, () => {

            });
        });
    }


    handleInboxChat(convoid) {
        if (this.state.current_convo_id == convoid) {
            console.log("handleInboxChat(): don't change the current_convo_id.");
        } else {
            console.log("handleInboxChat(): change the current_convo_id.");
            this.setState({
                ...this.state,
                current_convo_id: convoid
            }, () => {
                // EXECUTES AFTER THE CURRENT CONVO ID IS UPDATED
            });
        }
    }

    handleInboxPeopleOrder(convoid) {
        const { convos } = this.state;
        if (convos[0].id == convoid) {
            // DO NOTHING
        } else {
            getConvos((response) => {
                console.log('getConvos response: ');
                console.log(response);
                this.setState({
                    ...this.state,
                    convos: response.data,
                    current_convo_id: response.data.length != 0 ? response.data[0].id : null
                }, () => {
    
                });
            });
        }
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
                                            handleInboxPeopleOrder={this.handleInboxPeopleOrder}
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