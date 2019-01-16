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

const sendMessage = () => {

}

export { getMessages, sendMessage };