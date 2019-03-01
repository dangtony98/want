import axios from 'axios';
import { WANT_URL } from '../variables/variables';

// GETFEED() — GET

// GETS NEWSFEED OF WANTS TO DISPLAY
// CALLBACK: CALLBACK TO EXECUTE UPON GETTING FEED

const getFeed = (callback) => {
    axios.post(`${WANT_URL}/api/newsfeed`, {
            // categories: [''],
            // sort_by: 'created_at#desc'
        },
        { 
            headers: { 
                Accept: 'application/json', 
                Authorization: `Bearer ${localStorage.getItem('token')}` 
            }
        })
        .then((response) => {
            // NEWSFEED RETRIEVAL SUCCESSFUL
            callback(response);
        })
        .catch((error) => {
            // NEWSFEED RETRIEVAL UNSUCCESSFUL
            console.log('Error: ' + error);
        });
}

export { getFeed };