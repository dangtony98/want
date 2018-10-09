var moment = require('moment');

const chat = {
    chatTarget: null,
    chatMessages: [{
        sender: '12aSK3eBV1',
        content: 'Hello'
    }, {
        sender: '12aSK3eBV1',
        content: 'This message is being stored as an array element by Redux.'
    }, { 
        sender: '11aS43eaF3',
        content: 'Great!'
    }],
    chatInput: ''
}

// console.log(chat.chatMessages[2].timestamp.format('dddd h:mma'));

export default (state = chat, action) => {
    switch (action.type) {
        case 'UPDATE_CHAT_INPUT':
            return {
                ...state,
                chatInput: action.chatInput
            };
        case 'SEND_MESSAGE':
            return {
                ...state,
                chatMessages: [...state.chatMessages, action.chatMessage]
            };
        default:
            return state;
    }
}