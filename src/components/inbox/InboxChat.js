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
            chats: [{
                id: 123,
                username: 'lisahwang@gmail.com',
                message: "Hey I'm just not feeling too well right now. A hug or two would really be appreciated..."
            }, {
                id: 498,
                username: 'dangtony98@gmail.com',
                message: "Are you okay? Let me help you... Where are you staying?"
            }, {
                id: 291,
                username: 'lisahwang@gmail.com',
                message: "4022 Spruce Street."
            }, {
                id: 108,
                username: 'lisahwang@gmail.com',
                message: "Thanks so much..."
            }, {
                id: 183,
                username: 'dangtony98@gmail.com',
                message: "Ofc. I wanna make sure you're okay. I'll be over asap!"
            }],
            chatInput: '',
            username: ''
        }
    }

    componentDidMount() {
        // MOUNT AND SUBSCRIBE NEW PUSHER & LOAD CHAT CONTENTS

        this.setState({
            username: this.props.email
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
        const { chats, chatInput, username } = this.state;
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
                            chats={chats} 
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
    email: admin.email
});

export default connect(mapStateToProps)(InboxChat);