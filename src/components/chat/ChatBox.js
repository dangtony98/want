import React, { Component } from 'react';
import { connect } from 'react-redux';
import Textarea from 'react-textarea-autosize';
import ChatBlock from './ChatBlock';
import { closeChatIsExpanded } from '../../actions/layout';
import { updateChatInput, sendMessage } from '../../actions/chat';
import image from '../../assets/sample-profile.png';

export class ChatBox extends Component {
    constructor(props) {
        super(props);

        this.onCloseBtnPressed = this.onCloseBtnPressed.bind(this);
        this.onChatTyped = this.onChatTyped.bind(this);
        this.onEnterPressed = this.onEnterPressed.bind(this);
    }

    onCloseBtnPressed() {
        this.props.closeChatIsExpanded();
    }

    onChatTyped(e) {
        const chatInput = e.target.value;
        this.props.updateChatInput(chatInput);
    }

    onEnterPressed(e) {
        if(e.keyCode == 13 && e.shiftKey == false && /\S/.test(e.target.value)) {
            e.preventDefault();
            this.props.sendMessage({
                sender: this.props.currentUser,
                content: e.target.value
            });
            this.props.updateChatInput('');
        }
    }

    render() {
        const chatBoxStyles = this.props.chatIsExpanded ? 'chat-box--active' : 'chat-box--inactive';
        const { chatInput, chatMessages } = this.props;
        return (
            <div className={`chat-box ${chatBoxStyles}`}>
                <div className="chat-box__header">
                    <div className="wrapper-flex">
                        <img 
                            src={image}
                            className="profile-picture--mini"
                        ></img>
                        <h4 className="chat-box__name marg-l-xs">John</h4>
                    </div>
                    <button
                        onClick={this.onCloseBtnPressed}
                        className="chat-box-minimize-button button-icon"
                    >
                        <i className="icon-minimize fas fa-window-minimize"></i>
                    </button>
                </div>
                <div className="chat-box__body">
                    {chatMessages.map((chatMessage) => {
                        return (
                            <ChatBlock 
                                chatMessage={chatMessage}
                            />
                        )
                    })}
                </div>
                <div className="chat-box__bottom">
                    <Textarea 
                        minRows={1}
                        maxRows={5}
                        onKeyDown={this.onEnterPressed}
                        onChange={this.onChatTyped}
                        value={chatInput}
                        placeholder="Enter a message"
                        className="chat-box-textarea textarea"
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ admin, layout, chat }) => ({
    currentUser: admin.currentUser,
    chatIsExpanded: layout.chatIsExpanded,
    chatInput: chat.chatInput,
    chatMessages: chat.chatMessages
});

const mapDispatchToProps = (dispatch) => ({
    closeChatIsExpanded: () => dispatch(closeChatIsExpanded()),
    updateChatInput: (chatInput) => dispatch(updateChatInput(chatInput)),
    sendMessage: (chatMessage) => dispatch(sendMessage(chatMessage))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatBox);

{/* <button
    onClick={this.onMessageBtnPressed}
    className="chat-box-message-button button-icon"
>
    <i class="icon-message fas fa-paper-plane"></i>
</button> */}