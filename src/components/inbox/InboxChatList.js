import React from 'react';

// COMPONENT NEEDS LOGIC TO HANDLE LEFT OR RIGHT MESSAGE ALIGNMENT

const inboxChatListStyles = {
    self: {
        wrapper: {
            justifyContent: 'flex-end'
        },
        message: {
            // color: 'rgb(255, 255, 255)',
            // backgroundColor: 'rgb(88, 42, 114)',
            color: 'rgb(88, 42, 114)',
            backgroundColor: 'transparent',
            border: '1px solid rgb(88, 42, 114)'
        }
    },
    other: {
        wrapper: {
            justifyContent: 'flex-start'
        },
        message: {
            color: 'rgb(127,140,141)',
            backgroundColor: 'transparent',
            border: '1px solid rgb(189,195,199)'
        }
    }
}

export default ({ chats, username }) => {
    console.log(chats);
    console.log(username);
    return (
        <div>
            {chats.map((chat) => (
                <div 
                    className="wrapper-flex wrapper-flex--center marg-b-sm"
                    style={chat.username == username ? inboxChatListStyles.self.wrapper : inboxChatListStyles.other.wrapper}
                >
                    {/* <img 
                        src="https://images.unsplash.com/photo-1530424590795-71c90b9c2f0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80" 
                        className="inbox-message__image marg-r-sm"
                    /> */}
                    <div 
                        className="inbox-message"
                        style={chat.username == username ? inboxChatListStyles.self.message : inboxChatListStyles.other.message}
                    >
                        <h4 className="marg-e">{chat.message}</h4>
                    </div>        
                </div>
            ))}
        </div>
    );
}