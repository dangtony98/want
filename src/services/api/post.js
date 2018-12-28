import axios from 'axios';
import { WANT_URL } from '../variables/variables';

// POST()

// POSTS A WANT CONTANING A TITLE, COST, CATEGORY, AND DESCRIPTION TO THE SERVER

const post = (form, scroll, callback) => {
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
        scroll.scrollToTop();
        // TRIGGER SUBSEQUENT REQUEST TO RELOAD NEWSFEED WITH THE POSTED WANT AS THE FIRST POST
    })
    .catch((error) => {
        // POST UNSUCCESSFUL
        console.log('Error: ' + error);
    });
}

export { post };