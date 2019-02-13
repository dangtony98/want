import React, { Component } from 'react';
import Pusher from 'pusher-js';
import Textarea from 'react-textarea-autosize';
import { Link } from 'react-router-dom';
import InboxChatList from './InboxChatList';
import { getMessages, sendMessage, seenMessages } from '../../services/api/inbox';
import { WANT_URL } from '../../services/variables/variables';
import PropTypes from 'prop-types';
 
export default class InboxChat extends Component {
    constructor(props) {
        super(props);

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleUploadFile = this.handleUploadFile.bind(this);
        this.enterImage = this.enterImage.bind(this);
        this.exitImage = this.exitImage.bind(this);
        this.onEnterPressed = this.onEnterPressed.bind(this);

        this.state = {
            pusher: null,
            convo_id: null,
            sender: null,
            receiver: null,
            messages: [],
            disabledInput: true,
            chatInput: '',
            imageAttachmentsDisplay: [],
            imageAttachments: []
        }
    }

    componentDidMount() {
        console.log('componentDidMount() with convo_id: ' + this.props.convoid);
        Pusher.logToConsole = true;

        const pusher = new Pusher('78565ef6078f239cd16c', {
            cluster: 'us2',
            encrypted: true,
            authEndpoint: `${WANT_URL}/broadcasting/auth`,
            auth: {
                headers: { 
                    Accept: 'application/json', 
                    Authorization: `Bearer ${localStorage.getItem('token')}` 
                }
            }      
        });

        this.setState({
            ...this.state,
            pusher: pusher,
            disabledInput: true
        }, () => {
            const { convoid } = this.props;

            const channel = pusher.subscribe(`private-chat.${convoid}`);
            channel.bind("App\\Events\\MessageSentEvent", (data) => {
                this.setState({
                    ...this.state,
                    messages: [...this.state.messages, data.message]
                })
            });
    
            channel.bind('pusher:subscription_error', function(status) {
                console.log('pusher:subscription_error details: ');
                console.log(status);
            });
    
            getMessages(convoid, (data) => {
                const adminIsSender = JSON.parse(localStorage.getItem('user')).id == data.wanter.id;
                this.setState({
                    ...this.state,
                    convo_id: data.id,
                    messages: data.messages,
                    sender: adminIsSender ? data.wanter : data.fulfiller,
                    receiver: adminIsSender ? data.fulfiller : data.wanter,
                    disabledInput: false
                }, () => {
                    seenMessages(convoid);
                });
            });
        });
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps() with convo_id: ' + nextProps.convoid);
        const { convoid } = nextProps;
        const pusher = new Pusher('78565ef6078f239cd16c', {
            cluster: 'us2',
            encrypted: true,
            authEndpoint: `${WANT_URL}/broadcasting/auth`,
            auth: {
                headers: { 
                    Accept: 'application/json', 
                    Authorization: `Bearer ${localStorage.getItem('token')}` 
                }
            }      
        });

        const channel = pusher.subscribe(`private-chat.${convoid}`);
        channel.unbind("App\\Events\\MessageSentEvent");

        this.setState({
            ...this.state,
            disabledInput: true
        });

        getMessages(convoid, (data) => {
            const adminIsSender = JSON.parse(localStorage.getItem('user')).id == data.wanter.id;
            this.setState({
                ...this.state,
                convo_id: data.id,
                messages: data.messages,
                sender: adminIsSender ? data.wanter : data.fulfiller,
                receiver: adminIsSender ? data.fulfiller : data.wanter,
                disabledInput: false
            }, () => {
                seenMessages(convoid);
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
                const { imageAttachmentsDisplay } = this.state;
                if (imageAttachmentsDisplay.length < 8) {
                    this.setState({
                        ...this.state,
                        imageAttachmentsDisplay: [...this.state.imageAttachmentsDisplay, e.target.result],
                        imageAttachments: [this.state.imageAttachments, file]
                    });
                } else {
                    // SHOW ERROR MESSAGE INDICATING THAT THE IMAGE ATTACHMENT LIMIT (8) HAS BEEN REACHED.
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
            // SEND POST REQUEST TO SERVER WITH TRIMEMD (.TRIM()) MESSAGE WITH (OPTIONAL) IMAGE PAYLOAD
            e.preventDefault();
            const { convo_id, chatInput, imageAttachments } = this.state;
            let data = new FormData();

            for (let i = 0; i < imageAttachments.length; i++) {
                data.append('attachment[]', imageAttachments[i]);
            }

            sendMessage({
                convo_id: convo_id,
                message: chatInput.trim(),
                attachment: data
            }, () => {
                this.setState({
                    ...this.state,
                    chatInput: '',
                    imageAttachments: []
                });
                // TRIGGER GETCONVOS AGAIN IF CURRENT CONVO ISN'T ALREADY ON TOP
                this.props.handleInboxPeopleOrder(convo_id);
                console.log('onEnterPressed() after sendMessage()');
            });
        }
    }

    render() {
        const { messages, disabledInput, chatInput, imageAttachmentsDisplay, sender, receiver } = this.state;
        return (
            <div className="inbox-chat">
                <div className="inbox-chat__box">
                    <div className="inbox-chat__top wrapper-flex-spaced wrapper-flex-spaced--center">
                        <div></div>
                        <div>
                            <h4 className="marg-e">
                                {receiver &&
                                    <Link to={`/profile/${receiver.id}`} target="_blank" className="inbox-link--invert link">
                                        {receiver && receiver.first_name}
                                    </Link>
                                }
                            </h4>
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
                            {imageAttachmentsDisplay.map((imageAttachment) => (
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
                                disabled={disabledInput}
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
    email: PropTypes.string,
    convoid: PropTypes.number
}