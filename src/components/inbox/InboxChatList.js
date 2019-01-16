import React, { Component } from 'react';
import { IMAGE_URL } from '../../services/variables/variables';
import moment from 'moment';
import PropTypes from 'prop-types';

// GET TIME STAMPS GOING.

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

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom() {
        this.inboxChatListEnd.scrollIntoView({ block: "end", behavior: "smooth" });
    }

    render() {
        const { messages, sender, receiver } = this.props;
        console.log('messages: ');
        console.log(messages);
        return (
            <div className="inbox-chat-list">
                {messages.map((message, index) => 
                    (
                        <div className={`${index != messages.length - 1 && "marg-b-sm"}`}>
                            <div 
                                className={`wrapper-flex wrapper-flex--center`}
                                style={
                                    message.user_id == sender.id ? 
                                    inboxChatListStyles.sender.wrapper : 
                                    inboxChatListStyles.receiver.wrapper
                                }
                            >
                                {(message.user_id != sender.id && (messages[index + 1] ? message.user_id != messages[index + 1].user_id : true)) ? 
                                    <img 
                                        src={`${IMAGE_URL}/${receiver.avatar}`} 
                                        className="inbox-message__image marg-r-sm"
                                        style={inboxChatListStyles.receiver.image}
                                    /> : <div className="inbox-message__image-placeholder marg-r-sm"></div>
                                }
                                <div>
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
                                    
                                    {/* INSERT CONDITIONAL TIME STAMP*/}
                                </div>
                                {(message.user_id == sender.id && (messages[index + 1] ? message.user_id != messages[index + 1].user_id : true)) ? 
                                    <img 
                                        src={`${IMAGE_URL}/${sender.avatar}`} 
                                        className="inbox-message__image marg-l-sm"
                                        style={inboxChatListStyles.sender.image}
                                    /> : <div className="inbox-message__image-placeholder marg-l-sm"></div>
                                }      
                            </div>
                            {(messages[index + 1] ? message.user_id != messages[index + 1].user_id : true) &&
                                (
                                    <div 
                                        className="wrapper-flex wrapper-flex--center"
                                        style={
                                            message.user_id == sender.id ? 
                                            inboxChatListStyles.sender.wrapper : 
                                            inboxChatListStyles.receiver.wrapper
                                        }
                                    >
                                        <h4 
                                            className={`want-text ${message.user_id == sender.id ? 'marg-r-ml' : 'marg-l-ml'}`}
                                        >{moment(message.created_at).format("dddd, h:mm A")}</h4>
                                    </div>
                                )
                            }
                        </div>
                    )
                )}
                <div 
                    className="inbox-chat-list__scrollholder"
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