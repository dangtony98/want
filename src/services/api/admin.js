// 1) TRANSFER IN GETUSER() FROM AUTHENTICATION.JS
// 2) GET REQUEST TO GET PROFILE PICTURE? - MODIFY ADMIN ACTIONS AND REDUCER APPROPRIATELY

import axios from 'axios';
import { WANT_URL } from '../variables/variables';

// GETUSER() — GET

// GETS USER ADMIN DATA
// PROPS: CONTAINS SETUSER() FUNC

const getUser = (props) => {
    axios.get(`${WANT_URL}/api/user`, 
        {
            headers: { 
                Accept: 'application/json', 
                Authorization: `Bearer ${localStorage.getItem('token')}` 
            }
        })
        .then((response) => {
            // SEND POST REQUEST TO LOAD USER
            props.setUser(response.data.user);
            localStorage.setItem('user', JSON.stringify(response.data.user));
        })
        .catch((error) => {
            console.log('Error: ' + error);
        });
}

// GETAVATAR() — GET

// GETS USER AVATAR
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
            // AVATAR RETRIEVAL SUCCESSFUL
            console.log('AVATAR RETRIEVAL SUCCESS WITH: ');
            console.log(response);
        })
        .catch((error) => {
            // AVATAR RETRIEVAL UNSUCCESSFUL
            console.log('Error: ' + error);
        });
}

export { getUser, getAvatar };