import axios from 'axios';
import { IMAGE_URL, WANT_URL } from '../variables/variables';

// UPLOADAVATAR() — POST

// UPLOADS NEW PROFILE PICTURE TO THE SERVER
// DATA: CONTAINS THE NEW IMAGE

const uploadAvatar = (data, callback) => {
    axios.post(`${WANT_URL}/api/avatar`, data,
    {
        headers: { 
            Accept: 'application/json', 
            Authorization: `Bearer ${localStorage.getItem('token')}` 
        }
    })
    .then((response) => {
        // UPLOAD AVATAR SUCCESSFUL
        console.log('Avatar upload successful');
        callback();
    })
    .catch((error) => {
        // UPLOAD AVATAR UNSUCCESSFUL
        console.log('Error: ' + error);
    });
}

// GETAVATAR() — GET

// GETS THE CURRENT PROFILE PICTURE FROM THE SERVER
// PROPS: CONTAINS SETPHOTO() FUNC

const getAvatar = (props) => {
    axios.get(`${WANT_URL}/api/avatar`, 
    {
        headers: { 
            Accept: 'application/json', 
            Authorization: `Bearer ${localStorage.getItem('token')}` 
        }
    })
    .then((response) => {
        // SEND POST REQUEST TO LOAD USER
        props.setPhoto(response.data);
    })
    .catch((error) => {
        console.log('Error: ' + error);
    });
}

export { uploadAvatar, getAvatar };