import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Collapse } from 'react-collapse';
import Textarea from 'react-textarea-autosize';
import PropTypes from 'prop-types';
import ChatRenegotiation from './ChatRenegotiation';
import ChatBlock from './ChatBlock';
import { closeChatIsExpanded, closeChatRenegotiationIsExpanded, invertChatRenegotiationIsExpanded } from '../../actions/layout';
import { updateChatInput, sendMessage } from '../../actions/chat';

export class ChatBox extends Component {
    constructor(props) {
        super(props);

        this.onCloseBtnPressed = this.onCloseBtnPressed.bind(this);
        this.onRenegotiationBtnPressed = this.onRenegotiationBtnPressed.bind(this);
        this.onChatTyped = this.onChatTyped.bind(this);
        this.onEnterPressed = this.onEnterPressed.bind(this);

        this.scrollToBottom = this.scrollToBottom.bind(this);
        this.applyCharacterLimit = this.applyCharacterLimit.bind(this);
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    onCloseBtnPressed() {
        this.props.closeChatRenegotiationIsExpanded();
        this.props.closeChatIsExpanded();
    }

    onRenegotiationBtnPressed() {
        this.props.invertChatRenegotiationIsExpanded();
    }

    onChatTyped(e) {
        if (e.target.value.trim() != '') {
            this.props.updateChatInput(e.target.value);
        } else {
            this.props.updateChatInput('');
        }
    }

    onEnterPressed(e) {
        if(e.keyCode == 13 && e.shiftKey == false && /\S/.test(e.target.value)) {
            e.preventDefault();
            this.props.sendMessage({
                sender: this.props.currentUser,
                content: e.target.value
            });
            this.props.updateChatInput('');
            this.chatBoxEnd.scrollIntoView({ behavior: "smooth" });
        }
    }

    scrollToBottom() {
        this.chatBoxEnd.scrollIntoView({ behavior: "smooth" });
    }

    applyCharacterLimit(description, limit) {
        return `${description.substring(0, limit)}...`;
    }

    render() {
        const chatBoxStyles = this.props.chatIsExpanded ? 'chat-box--active' : 'chat-box--inactive';
        const { chatInput, chatMessages } = this.props;
        return (
            <div className={`chat-box ${chatBoxStyles}`}>
                <div className="chat-box__header">
                    <div className="wrapper-flex wrapper-flex--center">
                        <img 
                            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
                            className="profile-picture--mini"
                        ></img>
                        <h4 className="chat-box__name">John</h4>
                    </div>
                    <div className="wrapper-flex wrapper-flex--center">
                        <button
                            onClick={this.onRenegotiationBtnPressed}
                            className="button-icon"
                        >
                            <i className="icon-dollar fas fa-dollar-sign"></i>
                        </button>
                        <button
                            onClick={this.onCloseBtnPressed}
                            className="button-icon"
                        >
                            <i className="icon-minimize fas fa-window-minimize"></i>
                        </button>
                        
                    </div>
                </div>
                <Collapse isOpened={this.props.chatRenegotiationIsExpanded}>
                    <ChatRenegotiation />
                </Collapse>
                {/* <div className="chat-box__details">
                    <h4 className="chat-box__subject">{this.applyCharacterLimit('Buy and deliver groceries from Wegmans', 20)}</h4>
                    <h4 className="chat-box__pay">$20</h4>
                </div> */}
                <div
                    className="chat-box__body">
                    {chatMessages.map((chatMessage, index) => {
                        return (
                            <ChatBlock 
                                chatMessage={chatMessage}
                                key={index}
                            />
                        )
                    })}
                    <div style={{ float:"left", clear: "both", margin: '0' }}
                        ref={(el) => { this.chatBoxEnd = el; }}>
                    </div>
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

ChatBox.propTypes = {
    currentUser: PropTypes.string.isRequired,
    chatIsExpanded: PropTypes.bool.isRequired,
    chatInput: PropTypes.string,
    chatMessages: PropTypes.array,
    chatRenegotiationIsExpanded: PropTypes.bool.isRequired,
    closeChatIsExpanded: PropTypes.func.isRequired,
    updateChatInput: PropTypes.func.isRequired,
    sendMessage: PropTypes.func.isRequired,
    closeChatRenegotiationIsExpanded: PropTypes.func.isRequired,
    invertChatRenegotiationIsExpanded: PropTypes.func.isRequired
}

const mapStateToProps = ({ admin, layout, chat }) => ({
    currentUser: admin.currentUser,
    chatIsExpanded: layout.chatIsExpanded,
    chatInput: chat.chatInput,
    chatMessages: chat.chatMessages,
    chatRenegotiationIsExpanded: layout.chatRenegotiationIsExpanded
});

const mapDispatchToProps = (dispatch) => ({
    closeChatIsExpanded: () => dispatch(closeChatIsExpanded()),
    updateChatInput: (chatInput) => dispatch(updateChatInput(chatInput)),
    sendMessage: (chatMessage) => dispatch(sendMessage(chatMessage)),
    closeChatRenegotiationIsExpanded: () => dispatch(closeChatRenegotiationIsExpanded()),
    invertChatRenegotiationIsExpanded: () => dispatch(invertChatRenegotiationIsExpanded())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatBox);