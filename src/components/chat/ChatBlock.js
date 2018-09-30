import React from 'react';
import { connect } from 'react-redux';

export const ChatBlock = ({ chatMessage, currentUser }) => {
    const chatMessageStyle = {
        backgroundColor: currentUser == chatMessage.sender ? '#582A72' : '#ECF0F1',
        color: currentUser == chatMessage.sender ? '#fff' : '#7F8C8D',
        margin: currentUser == chatMessage.sender ? '0 0 0 auto' : '0 auto 0 0'
    }

    return (
        <div className="chat-block">
            <div 
                style={chatMessageStyle}
                className={`chat-block__message`}
            >
                {chatMessage.content}
            </div>
        </div>
    );
}

const mapStateToProps = ({ admin }) => ({
    currentUser: admin.currentUser
});

export default connect(mapStateToProps)(ChatBlock);