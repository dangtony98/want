import React, { Component } from 'react';
import { IMAGE_URL } from '../../services/variables/variables';
import PropTypes from 'prop-types';

const inboxChatListStyles = {
    sender: {
        wrapper: {
            justifyContent: 'flex-end'
        },
        message: {
            color: 'rgb(88, 42, 114)',
            backgroundColor: 'transparent',
            border: '1px solid rgb(88, 42, 114)'
        },
        image: {
            border: '1px solid rgb(88, 42, 114)'
        }
    },
    receiver: {
        wrapper: {
            justifyContent: 'flex-start'
        },
        message: {
            color: 'rgb(127,140,141)',
            backgroundColor: 'transparent',
            border: '1px solid rgb(189,195,199)'
        },
        image: {
            border: '1px solid rgb(189,195,199)'
        }
    }
}

export default class InboxChatList extends Component {
    constructor(props) {
        super(props);

        this.scrollToBottom = this.scrollToBottom.bind(this);
    }

    // componentDidMount() {
    //     this.scrollToBottom();
    // }

    // componentDidUpdate() {
    //     this.scrollToBottom();
    // }

    scrollToBottom() {
        this.inboxChatListEnd.scrollIntoView({ behavior: "smooth" });
    }

    render() {
        const { messages, sender, receiver } = this.props;
        return (
            <div className="inbox-chat-list">
                {messages.map((message, index) => 
                    (
                        <div 
                            className="wrapper-flex wrapper-flex--center marg-b-sm"
                            style={
                                message.user_id == sender.id ? 
                                inboxChatListStyles.sender.wrapper : 
                                inboxChatListStyles.receiver.wrapper
                            }
                        >
                            {(message.user_id != sender.id && (index < 1 || message.user_id != messages[index - 1].user_id)) ? 
                                <img 
                                    src={`${IMAGE_URL}/${receiver.avatar}`} 
                                    className="inbox-message__image marg-r-sm"
                                    style={inboxChatListStyles.receiver.image}
                                /> : <div className="inbox-message__image-placeholder marg-r-sm"></div>
                            }
                            <div 
                                className="inbox-message"
                                style={
                                    message.user_id == sender.id ? 
                                    inboxChatListStyles.sender.message : 
                                    inboxChatListStyles.receiver.message
                                }
                            >
                                <h4 className="marg-e">{message.message}</h4>
                            </div>
                            {(message.user_id == sender.id && (index < 1 || message.user_id != messages[index - 1].user_id)) ? 
                                <img 
                                    src={`${IMAGE_URL}/${sender.avatar}`} 
                                    className="inbox-message__image marg-l-sm"
                                    style={inboxChatListStyles.sender.image}
                                /> : <div className="inbox-message__image-placeholder marg-l-sm"></div>
                            }      
                        </div>
                    )
                )}
                <div 
                    style={{ float:"left", clear: "both", margin: '0' }}
                    ref={(el) => { this.inboxChatListEnd = el; }}>
                </div>
            </div>
        );
    }
}

InboxChatList.propTypes = {
    messages: PropTypes.array,
    sender: PropTypes.object,
    receiver: PropTypes.object
}