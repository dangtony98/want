import axios from 'axios';
import { WANT_URL } from '../variables/variables';

// POST()

// POSTS A WANT CONTANING A TITLE, COST, CATEGORY, AND DESCRIPTION TO THE SERVER

const post = (form, callback) => {
    axios.post(`${WANT_URL}/api/want`, form,
    {
        headers: { 
            Accept: 'application/json', 
            Authorization: `Bearer ${localStorage.getItem('token')}` 
        }
    })
    .then((response) => {
        // POST SUCCESSFUL
        callback();
    })
    .catch((error) => {
        // POST UNSUCCESSFUL
        console.log('Error: ' + error);
    });
}

export { post };