import axios from 'axios';
import { WANT_URL } from '../variables/variables';

// GETCONVOS — GET

// GETS THE USER'S CURRENT ACTIVE CONVERSATIONS

const getConvos = (callback) => {
    axios.get(`${WANT_URL}/api/conversations`, 
    { 
        headers: { 
            Accept: 'application/json', 
            Authorization: `Bearer ${localStorage.getItem('token')}` 
        }
    })
    .then((response) => {
        // GET CONVERSATIONS SUCCESSFUL
        callback(response);
    })
    .catch((error) => {
        // GET CONVERSATIONS UNSUCCESSFUL
        console.log('Error: ' + error);
    });
}

// CREATECONVO() — POST

// CREATES A NEW CONNVERSATION BETWEEN A GIVEN WANTER AND A GIVEN FULFILLER WITH AN OPTIONAL WANT
// CONTENT: CONTAINS WANTER_ID AND FULFILLER_ID
// CALLBACK: CALLBACK TO PUSH TO THE INBOX PAGE

const createConvo = (content, callback) => {
    axios.post(`${WANT_URL}/api/conversation`, {
        ...content
    },
    { 
        headers: {
            Accept: 'application/json', 
            Authorization: `Bearer ${localStorage.getItem('token')}` 
        }
    })
    .then((response) => {
        // CREATE CONVERSATIONNS SUCCESSFUL
        console.log('createConvo() successful with response: ');
        console.log(response);
        callback();
    })
    .catch((error) => {
        // CREATE CONVERSATIONS UNSUCCESSFUL
        console.log('Error: ' + error);
    });
}

// GETUNREADMESSAGESTOTAL() — GET

// GETS TOTAL COUNT OF UNREAD MESSAGES/CONVERSATIONS
// CALLBACK: CALLBACK TO DISPLAY COUNT IN NAVIGATION BAR

const getUnreadMessagesTotal = (callback) => {
    axios.get(`${WANT_URL}/api/total-unread-message`, 
    { 
        headers: { 
            Accept: 'application/json', 
            Authorization: `Bearer ${localStorage.getItem('token')}` 
        }
    })
    .then((response) => {
        // GET CONVERSATIONS SUCCESSFUL
        console.log('getUnreadMessagesTotal response: ');
        console.log(response);
        callback(response.data.unseen_count);
    })
    .catch((error) => {
        // GET CONVERSATIONS UNSUCCESSFUL
        console.log('Error: ' + error);
    });
}

// GETMESSAGES() — GET

// GET MESSAGES FOR THE GIVEN CONVERSATION
// CONVO_ID: THE ID OF THE CONVERSATION

const getMessages = (convo_id, callback) => {
    axios.post(`${WANT_URL}/api/get-message`, {
        convo_id: convo_id
    },
    { 
        headers: { 
            Accept: 'application/json', 
            Authorization: `Bearer ${localStorage.getItem('token')}` 
        }
    })
    .then((response) => {
        // GET MESSAGES SUCCESSFUL
        callback(response.data);
    })
    .catch((error) => {
        // GET MESSAGES UNSUCCESSFUL
        console.log('Error: ' + error);
    });
}

// SENDMESSAGE() — POST

// SEND A MESSAGE TO THE OTHER USER
// CONTENT: CONTAINS THE CONVO_ID AND MESSAGE TO SEND

const sendMessage = (content, callback) => {
    axios.post(`${WANT_URL}/api/send-message`, {
        ...content
    },
    { 
        headers: { 
            Accept: 'application/json', 
            Authorization: `Bearer ${localStorage.getItem('token')}` 
        }
    })
    .then((response) => {
        // SEND MESSAGES SUCCESSFUL
        callback();
    })
    .catch((error) => {
        // SEND MESSAGES UNSUCCESSFUL
        console.log('Error: ' + error);
    });
}

const seenMessages = (convo_id) => {
    console.log('seenMessages convo_id: ' + convo_id);
    axios.post(`${WANT_URL}/api/seen-message`, {
        convo_id: convo_id
    },
    { 
        headers: { 
            Accept: 'application/json', 
            Authorization: `Bearer ${localStorage.getItem('token')}` 
        }
    })
    .then((response) => {
        // SEND MESSAGES SUCCESSFUL
        console.log('seenMessage() successful with response: ');
        console.log(response);
    })
    .catch((error) => {
        // SEND MESSAGES UNSUCCESSFUL
        console.log('Error: ' + error);

    });
}

export { 
    getConvos, 
    createConvo, 
    getUnreadMessagesTotal, 
    getMessages, 
    sendMessage, 
    seenMessages 
};