import axios from 'axios';
import store from '../../store/store';
import { getUser } from '../../services/api/authentication';
import { setUser } from '../../actions/admin';
import { WANT_URL } from '../variables/variables';

// UPLOADAVATAR()

// UPLOADS NEW PROFILE PICTURE TO THE SERVER
// DATA: CONTAINS THE NEW IMAGE

const uploadAvatar = (data) => {
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
    })
    .catch((error) => {
        // UPLOAD AVATAR UNSUCCESSFUL
        console.log('Error: ' + error);
    });
}

export { uploadAvatar };