import axios from 'axios';
import { WANT_URL } from '../variables/variables';

// GETFEED() — GET

// GETS NEWSFEED OF WANTS TO DISPLAY
// PROPS: CONTAINS UPDATEFEED() FUNC
// CALLBACK: CALLBACK TO EXECUTE UPON GETTING FEED

const getFeed = (props, callback) => {
    axios.post(`${WANT_URL}/api/newsfeed`, {
            categories: [''],
            sort_by: 'created_at#desc'
        },
        { 
            headers: { 
                Accept: 'application/json', 
                Authorization: `Bearer ${localStorage.getItem('token')}` 
            }
        })
        .then((response) => {
            // NEWSFEED RETRIEVAL SUCCESSFUL
            console.log('the newsfeed: ');
            console.log(response);
            props.updateFeed(response.data);
            callback();
        })
        .catch((error) => {
            // NEWSFEED RETRIEVAL UNSUCCESSFUL
            console.log('Error: ' + error);
        });
}

export { getFeed };