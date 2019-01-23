import axios from 'axios';
import { WANT_URL } from '../variables/variables';

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
// CONTENT: CONTAINS THE CONVO_ID AND MESSAGE OF THE MESSAGE TO SEND

const sendMessage = (content, callback) => {
    console.log('content being sent: ');
    console.log(content);
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
        // GET MESSAGES SUCCESSFUL
        console.log('sendMessage() successful');
        callback();
    })
    .catch((error) => {
        // GET MESSAGES UNSUCCESSFUL
        console.log('Error: ' + error);
    });
}

export { getMessages, sendMessage };