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
// CONTENT: CONTAINS  

const createConvo = (content) => {
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
    })
    .catch((error) => {
        // CREATE CONVERSATIONS UNSUCCESSFUL
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
        console.log(`getMessages convo_id: ${convo_id}`);
        console.log('getMessages response: ');
        console.log(response);
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
        console.log('sendMessage() successful');
        callback();
    })
    .catch((error) => {
        // SEND MESSAGES UNSUCCESSFUL
        console.log('Error: ' + error);
    });
}

export { getConvos, createConvo, getMessages, sendMessage };