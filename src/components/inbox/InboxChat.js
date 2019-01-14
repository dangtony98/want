import React, { Component } from 'react';
import { connect } from 'react-redux';
import Textarea from 'react-textarea-autosize';
import InboxChatList from './InboxChatList';
import PropTypes from 'prop-types';
 
export class InboxChat extends Component {
    constructor(props) {
        super(props);

        this.handleTextChange = this.handleTextChange.bind(this);
        this.onEnterPressed = this.onEnterPressed.bind(this);

        this.state = {
            // CHANGE CHAT CONTENTS
            messages: [],
            chatInput: '',
            username: null
        }
    }

    componentDidMount() {
        // MOUNT AND SUBSCRIBE NEW PUSHER & LOAD CHAT CONTENTS

        const chat = {
            id: 1,
            wanter_id: 3,
            fulfiller_id: 10,
            created_at: new Date(),
            updated_at: new Date(),
            messages: [
                {
                    id: 1,
                    message: "Hey I'm just not feeling too well right now. A hug or two would really be appreciated...",
                    user_id: 3,
                    created_at: new Date(),
                    updated_at: new Date(),
                    conversation_id: 1
                }, {
                    id: 2,
                    message: "Are you okay? Let me help you... Where are you staying?",
                    user_id: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).id : null,
                    created_at: new Date(),
                    updated_at: new Date(),
                    conversation_id: 1
                }, {
                    id: 3,
                    message: "4022 Spruce Street.",
                    user_id: 3,
                    created_at: new Date(),
                    updated_at: new Date(),
                    conversation_id: 1
                }, {
                    id: 4,
                    message: "Thanks so much...",
                    user_id: 3,
                    created_at: new Date(),
                    updated_at: new Date(),
                    conversation_id: 1
                }, {
                    id: 5,
                    message: "Ofc. I wanna make sure you're okay. I'll be over asap!",
                    user_id: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).id : null,
                    created_at: new Date(),
                    updated_at: new Date(),
                    conversation_id: 1
                }
            ]
        }
        
        this.setState({
            ...this.state,
            messages: chat.messages,
            username: JSON.parse(localStorage.getItem('user')).id
        });
    }

    handleTextChange(e) {
        this.setState({
            chatInput: e.target.value
        });
    }

    onEnterPressed(e) {
        if(e.keyCode == 13 && e.shiftKey == false && /\S/.test(e.target.value)) {
            e.preventDefault();
            // SEND MESSAGE

            this.setState({
                chatInput: ''
            });
        }
    }

    render() {
        const { messages, chatInput, username } = this.state;
        return (
            <div className="inbox-chat">
                <h4 className="content-heading">Chat</h4>
                <div className="inbox-chat__box">
                    <div className="inbox-chat__top wrapper-flex-spaced wrapper-flex-spaced--center">
                        <div></div>
                        <div>
                            <h4 className="marg-e">Lisa</h4>
                        </div>
                        <div></div>
                    </div>
                    <div className="inbox-chat__body">
                        <InboxChatList 
                            messages={messages} 
                            username={username}
                        />
                    </div>
                    <div className="inbox-chat__bottom wrapper-flex wrapper-flex--center">
                        <Textarea 
                            minRows={1}
                            maxRows={5}
                            value={chatInput}
                            onKeyDown={this.onEnterPressed}
                            onChange={this.handleTextChange}
                            placeholder="Enter a message"
                            className="inbox-chat-textarea textarea"
                        />
                        <button className="button-icon">
                            <i className="icon-paperclip fas fa-paperclip marg-l-sm"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

InboxChat.propTypes = {
    email: PropTypes.string
}

const mapStateToProps = ({ admin }) => ({
    id: admin.id
});

export default connect(mapStateToProps)(InboxChat);