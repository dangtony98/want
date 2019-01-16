import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pusher from 'pusher-js';
import Textarea from 'react-textarea-autosize';
import InboxChatList from './InboxChatList';
import { getMessages, sendMessage } from '../../services/api/inbox';
import PropTypes from 'prop-types';
 
export class InboxChat extends Component {
    constructor(props) {
        super(props);

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleUploadFile = this.handleUploadFile.bind(this);
        this.enterImage = this.enterImage.bind(this);
        this.exitImage = this.exitImage.bind(this);
        this.onEnterPressed = this.onEnterPressed.bind(this);

        this.state = {
            conversation_id: null,
            sender: null,
            receiver: null,
            messages: [],
            chatInput: '',
            imageAttachments: [],
        }
    }

    componentDidMount() {
        const pusher = new Pusher('78565ef6078f239cd16c', {
            cluster: 'us2',
            encrypted: true        
        });

        const channel = pusher.subscribe('chat.1');
        channel.bind("App\\Events\\MessageSentEvent", (data) => {
            console.log('Received a message from the other user.');
            this.setState({
                ...this.state,
                messages: [this.state.messages, data]
            })
        });

        getMessages(1, (data) => {
            const adminIsSender = JSON.parse(localStorage.getItem('user')).id == data.wanter.id;
            this.setState({
                ...this.state,
                conversation_id: data.id,
                messages: data.messages,
                sender: adminIsSender ? data.wanter : data.fulfiller,
                receiver: adminIsSender ? data.fulfiller : data.wanter
            });
        });
    }

    handleTextChange(e) {
        this.setState({
            ...this.state,
            chatInput: e.target.value
        });
    }

    handleUploadFile(e) {
        for (let i = 0; i < e.target.files.length; i++) {
            const reader = new FileReader();
            const file = e.target.files[i];
            reader.readAsDataURL(file);

            reader.onload = (e) => {
                const { imageAttachments } = this.state;
                if (imageAttachments.length < 8) {
                    this.setState({
                        ...this.state,
                        imageAttachments: [...this.state.imageAttachments, e.target.result]
                    });
                } else {
                    // SHOW ERROR MESSAGE INDICATING THAT THE IMAGE ATTACHMENT LIMIT (8) HAS BEEN REACHED
                }
            }
        }
    }

    enterImage(e) {
        // ENTERED IMAGE ATTACHMENT
    }

    exitImage(e) {
        // EXITED IMAGE ATTACHMENT
    }

    onEnterPressed(e) {
        const { imageAttachments } = this.state;
        if((e.keyCode == 13 && e.shiftKey == false && /\S/.test(e.target.value)) || (e.keyCode == 13 && imageAttachments.length != 0)) {
            e.preventDefault();
            // SEND POST REQUEST TO SERVER WITH TRIMEMD (.TRIM()) MESSAGE WITH (OPTIONAL) IMAGE PAYLOAD
            
            const { conversation_id, chatInput, sender } = this.state;

            sendMessage({
                convo_id: conversation_id,
                message: chatInput.trim()
            }, () => {
                this.setState({
                    ...this.state,
                    chatInput: '',
                    imageAttachments: [],
                    messages: [...this.state.messages, {
                        conversation_id: conversation_id,
                        user_id: sender.id,
                        message: chatInput.trim()
                    }]
                });
            });
        }
    }

    render() {
        const { messages, chatInput, imageAttachments, sender, receiver } = this.state;
        return (
            <div className="inbox-chat">
                <h4 className="content-heading">Chat</h4>
                <div className="inbox-chat__box">
                    <div className="inbox-chat__top wrapper-flex-spaced wrapper-flex-spaced--center">
                        <div></div>
                        <div>
                            <h4 className="marg-e">{receiver && receiver.first_name}</h4>
                        </div>
                        <div></div>
                    </div>
                    <div className="inbox-chat__body">
                        <InboxChatList 
                            messages={messages} 
                            sender={sender}
                            receiver={receiver}
                        />
                    </div>
                    <div className="inbox-chat__bottom">
                        <div className="inbox-chat__image-area wrapper-flex">
                            {imageAttachments.map((imageAttachment) => (
                                <img 
                                    src={imageAttachment}
                                    className="inbox-photo-upload__image marg-r-sm marg-b-sm"
                                    onMouseEnter={this.enterImage}
                                    onMouseLeave={this.exitImage}
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