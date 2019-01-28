import axios from 'axios';
import { WANT_URL } from '../variables/variables';

// GETPROFILE() — GET

// GETS A USER'S PUBLIC PROFILE GIVEN A USER'S ID
// USERID: THE USER TO RETRIEVE
// CALLBACK: CALLBACK TO PUSH TO NEW PAGE

const getProfile = (id, callback) => {
    axios.get(`${WANT_URL}/api/profile/${id}`, 
    {
        headers: { 
            Accept: 'application/json', 
            Authorization: `Bearer ${localStorage.getItem('token')}` 
        }
    })
    .then((response) => {
        // GET PROFILE SUCCESSFUL
        callback(response);
    })
    .catch((error) => {
        console.log('Error: ' + error);
        // GET PROFILE UNSUCCESSFUL
    });
}

// GETREVIEWS() — GET

// GETS A SET OF REVIEWS GIVEN A REQUESTED PAGE
// PAGE: THE PAGE TO RETRIEVE
// CALLBACK: THE SETSTATE CALLBACK TO ENABLE COMPONENT RERENDERING

const getReviews = (page, callback) => {
    callback();
}

export { getProfile, getReviews };