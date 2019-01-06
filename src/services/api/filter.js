import axios from 'axios';
import { WANT_URL } from '../variables/variables';

// APPLYSEARCHTERM() — POST

// APPLIES A SEARCH TERM SEARCH TO THE NEWSFEED

const applySearchTerm = (searchTerm) => {

}

// APPLYFILTERS() — POST

// APPLIES SORT AND FILTER OPTIONS TO THE NEWSFEED

const applyFilters = (filters, props) => {
    axios.post(`${WANT_URL}/api/newsfeedNew`, {
            ...filters
        },
        { 
            headers: { 
                Accept: 'application/json', 
                Authorization: `Bearer ${localStorage.getItem('token')}` 
            }
        })
        .then((response) => {
            // FILTERS SUCCESSFULLY APPLIED
            props.updateFeed(response.data);
        })
        .catch((error) => {
            // FILTERS UNSUCCESSFULLY APPLIED
            console.log('Error: ' + error);
        });
}

export { applySearchTerm, applyFilters };