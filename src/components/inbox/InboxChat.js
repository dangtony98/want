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
            username: null,
            photo: '',
            imageAttachment: 'one'
        }
    }

    componentDidMount() {
        // MOUNT AND SUBSCRIBE NEW PUSHER & LOAD CHAT CONTENTS
        console.log('local storage userx: ');
        console.log(JSON.parse(localStorage.getItem('user')));
        
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
            username: JSON.parse(localStorage.getItem('user')).id,
            photo: JSON.parse(localStorage.getItem('user')).avatar
        });
    }

    handleUploadFile(e) {
        console.log('handleUploadFile() in InboxChat triggered. Upload file: ');
        console.log(e.target.files[0]);
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        console.log('reader: ');
        console.log(reader);
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

            console.log('SEND TEXT!');
            this.setState({
                chatInput: ''
            });
        }
    }

    render() {
        const { messages, chatInput, username, photo, imageAttachment } = this.state;
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
                            photo={photo}
                        />
                    </div>
                    <div className="inbox-chat__bottom">
                        {imageAttachment &&
                            <div className="inbox-chat__image-area marg-b-xs">
                                <img 
                                    src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3024&q=80"
                                    className="inbox-photo-upload__image"
                                />
                            </div>
                        }
                        <div className="wrapper-flex wrapper-flex--center">
                            <Textarea 
                                minRows={1}
                                maxRows={5}
                                value={chatInput}
                                onKeyDown={this.onEnterPressed}
                                onChange={this.handleTextChange}
                                placeholder="Enter a message"
                                className="inbox-chat-textarea textarea"
                            />
                            <button className="button-icon marg-l-sm">
                                <label 
                                    htmlFor="inbox-photo-upload"
                                    className="inbox-photo-upload__label"
                                >
                                    <i className="icon-paperclip fas fa-paperclip"></i>
                                </label>
                                <input 
                                    type="file" 
                                    id="inbox-photo-upload"
                                    onChange={this.handleUploadFile} 
                                    accept="image/png, impage/jpeg"
                                    className="input-file" 
                                />
                            </button>
                        </div>
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