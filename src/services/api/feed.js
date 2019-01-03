import axios from 'axios';
import { WANT_URL } from '../variables/variables';

// GETFEED()

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
            console.log('NEWSFEED RESPONSEX: ');
            console.log(response);
            console.log(response.data.data);
            props.updateFeed(response.data);
        })
        .catch((error) => {
            // NEWSFEED RETRIEVAL UNSUCCESSFUL
            console.log('Error: ' + error);
        });
}

export { getFeed };