import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pusher from 'pusher-js';
import Textarea from 'react-textarea-autosize';
import InboxChatList from './InboxChatList';
import PropTypes from 'prop-types';
 
export class InboxChat extends Component {
    constructor(props) {
        super(props);

        this.handleUploadFile = this.handleUploadFile.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.enterImage = this.enterImage.bind(this);
        this.leaveImage = this.leaveImage.bind(this);
        this.onEnterPressed = this.onEnterPressed.bind(this);

        this.state = {
            // CHANGE CHAT CONTENTS
            messages: [],
            chatInput: '',
            username: null,
            photo: '',
            imageAttachments: []
        }
    }

    componentDidMount() {
        // MOUNT AND SUBSCRIBE NEW PUSHER & LOAD CHAT CONTENTS

        const pusher = new Pusher('78565ef6078f239cd16c', {
            cluster: 'us2',
            forceTLS: true,
            encrypted: true
        });

        const channel = pusher.subscribe('chat.1');
        channel.bind("App\\Events\\MessageSentEvent", (data) => {
            console.log('Inside channel.bind -> data: ');
            alert(JSON.stringify(data));
        });
        
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
        for (let i = 0; i < e.target.files.length; i++) {
            const reader = new FileReader();
            const file = e.target.files[i];
            reader.readAsDataURL(file);

            reader.onload = (e) => {
                this.setState({
                    ...this.state,
                    imageAttachments: [...this.state.imageAttachments, e.target.result]
                });
            }
        }
    }

    handleTextChange(e) {
        this.setState({
            ...this.state,
            chatInput: e.target.value
        });
    }

    enterImage(e) {
        console.log('Entered image: ');
        console.log(e.target);
    }

    leaveImage(e) {
        console.log('Left image: ');
        console.log(e.target);
    }

    onEnterPressed(e) {
        const { imageAttachments } = this.state;
        if((e.keyCode == 13 && e.shiftKey == false && /\S/.test(e.target.value)) || (e.keyCode == 13 && imageAttachments.length != 0)) {
            e.preventDefault();
            // SEND POST REQUEST TO SERVER WITH TRIMEMD (.TRIM()) MESSAGE WITH (OPTIONAL) IMAGE PAYLOAD
            
            this.setState({
                ...this.state,
                chatInput: '',
                imageAttachments: []
            });
        }
    }

    render() {
        const { messages, chatInput, username, photo, imageAttachments } = this.state;
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
                        <div className="inbox-chat__image-area wrapper-flex">
                            {imageAttachments.map((imageAttachment) => (
                                <img 
                                    src={imageAttachment}
                                    className="inbox-photo-upload__image marg-r-sm marg-b-sm"
                                    onMouseEnter={this.enterImage}
                                    onMouseLeave={this.leaveImage}
                                />
                            ))}
                        </div>
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
                                    accept="image/png, image/jpeg"
                                    multiple="multiple"
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