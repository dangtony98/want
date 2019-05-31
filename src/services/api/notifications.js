import axios from 'axios';
import { WANT_URL } from '../variables/variables';

// GETNOTIFICATIONS — GET

// GETS THE USER'S NOTIFICATIONS

const getNotifications = (callback) => {
    axios.get(`${WANT_URL}/api/notifiactions`, 
    { 
        headers: { 
            Accept: 'application/json', 
            Authorization: `Bearer ${localStorage.getItem('token')}` 
        }
    })
    .then((response) => {
        // GET NOTIFICATIONS SUCCESSFUL
        console.log('getNotifications response: ');
        console.log(response);
        callback(response);
    })
    .catch((error) => {
        // GET NOTIFICATIONS UNSUCCESSFUL
        console.log('Error: ' + error);
    });
}

// MARKNOTIFICATIONS — POST

// MARKS THE USER'S NOTIFICATIONS AS READ

const markNotifications = (callback) => {
    axios.post(`${WANT_URL}/api/mark-notifiactions-read`, {
        
    },
    { 
        headers: { 
            Accept: 'application/json', 
            Authorization: `Bearer ${localStorage.getItem('token')}` 
        }
    })
    .then((response) => {
        // MARK NOTIFICATIONS SUCCESSFUL
        callback();
    })
    .catch((error) => {
        // MARK NOTIFICATIONS UNSUCCESSFUL
        console.log('Error: ' + error);
    });
}

export { getNotifications, markNotifications };