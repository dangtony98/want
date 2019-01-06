import axios from 'axios';
import { WANT_URL } from '../variables/variables';

// GETFEED() — GET

// GETS NEWSFEED OF WANTS TO DISPLAY
// PROPS: CONTAINS UPDATEFEED() FUNC

const getFeed = (props) => {
    axios.get(`${WANT_URL}/api/newsfeed`, 
        { 
            headers: { 
                Accept: 'application/json', 
                Authorization: `Bearer ${localStorage.getItem('token')}` 
            }
        })
        .then((response) => {
            // NEWSFEED RETRIEVAL SUCCESSFUL
            props.updateFeed(response.data);
        })
        .catch((error) => {
            // NEWSFEED RETRIEVAL UNSUCCESSFUL
            console.log('Error: ' + error);
        });
}

// GETCATEGORIES — GET

// GETS LIST OF POSSIBLE WANT CATEGORIES

const getCategories = (props) => {
    axios.get(`${WANT_URL}/api/category`, 
        { 
            headers: { 
                Accept: 'application/json', 
                Authorization: `Bearer ${localStorage.getItem('token')}` 
            }
        })
        .then((response) => {
            // CATEGORIES RETRIEVAL SUCCESSFUL

        })
        .catch((error) => {
            // CATEGORIES RETRIEVAL UNSUCCESSFUL
            console.log('Error: ' + error);
        });
}

export { getFeed, getCategories };