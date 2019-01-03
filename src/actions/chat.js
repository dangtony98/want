import { UPDATE_CHAT_INPUT, SEND_MESSAGE } from './constants';

const updateChatInput = (chatInput) => ({
    type: UPDATE_CHAT_INPUT,
    chatInput
});

const sendMessage = (chatMessage) => ({
    type: SEND_MESSAGE,
    chatMessage
});

export { updateChatInput, sendMessage };