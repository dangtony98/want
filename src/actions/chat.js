const updateChatInput = (chatInput) => ({
    type: 'UPDATE_CHAT_INPUT',
    chatInput
});

const sendMessage = (chatMessage) => ({
    type: 'SEND_MESSAGE',
    chatMessage
});

export { updateChatInput, sendMessage };