import axios from 'axios';
import { WANT_URL } from '../variables/variables';

// APPLYSEARCHTERM() — POST

// APPLIES A SEARCH TERM SEARCH TO THE NEWSFEED

const applySearchTerm = (searchTerm) => {

}

// APPLYFILTERS() — POST

// APPLIES SORT AND FILTER OPTIONS TO THE NEWSFEED

const applyFilters = (filters) => {
    console.log('Attempting to submit the form: ');
    console.log(filters);
    
    axios.post(`${WANT_URL}/api/newsfeed`, {
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
            console.log('Filters submitted. Response: ');
            console.log(response);
        })
        .catch((error) => {
            // FILTERS UNSUCCESSFULLY APPLIED
            console.log('Error: ' + error);
        });
}

export { applySearchTerm, applyFilters };