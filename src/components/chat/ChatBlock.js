import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
var moment = require('moment');

const ChatBlock = ({ chatMessage, currentUser }) => {
    const chatStyle = {
        message: {
            backgroundColor: currentUser == chatMessage.sender ? '#582A72' : '#ECF0F1',
            color: currentUser == chatMessage.sender ? '#FFF' : '#7F8C8D',
            margin: currentUser == chatMessage.sender ? '0 0 0 auto' : '0 auto 0 0'
        },
        timestamp: {
            color: currentUser == chatMessage.sender ? '#7F8C8D' : '#7F8C8D',
            margin: currentUser == chatMessage.sender ? '10px 0 0 auto' : '10px auto 0 0'
        }
    }

    const renderTimeStamp = () => {

    }

    return (
        <div className="chat-block">
            <div className="wrapper-flex wrapper-flex--center">
                <div 
                    style={chatStyle.message}
                    className={`chat-block__message`}
                >
                    {chatMessage.content}
                </div>
            </div>
            {chatMessage.timestamp && 
            <div className="wrapper-flex wrapper-flex--center">
                <div
                    style={chatStyle.timestamp} 
                    className="chat-block__timestamp">
                    {chatMessage.timestamp.format('dddd h:mma')}
                </div>
            </div>}
        </div>
    );
}

ChatBlock.propTypes = {
    chatMessage: PropTypes.object.isRequired,
    currentUser: PropTypes.string.isRequired
}

const mapStateToProps = ({ admin }) => ({
    currentUser: admin.currentUser
});

export default connect(mapStateToProps)(ChatBlock);