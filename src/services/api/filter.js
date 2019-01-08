import axios from 'axios';
import { WANT_URL } from '../variables/variables';

// APPLYSEARCHTERM() — POST

// APPLIES A SEARCH TERM SEARCH TO THE NEWSFEED

const applySearchTerm = (searchTerm) => {

}

// APPLYFILTERS() — POST

// APPLIES SORT AND FILTER OPTIONS TO THE NEWSFEED

const applyFilters = (filters, props) => {
    console.log('Filters being applied: ');
    console.log(filters);
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
            console.log('Filters response: ');
            console.log(response);
            props.updateFeed(response.data);
            console.log('Filters next page url: ');
            console.log(response.data.next_page_url);
            props.setNextPageUrl(response.data.next_page_url);
            // SET NEW NEXT PAGE URL
        })
        .catch((error) => {
            // FILTERS UNSUCCESSFULLY APPLIED
            console.log('Error: ' + error);
        });
}

// GETCATEGORIES — GET

// GETS LIST OF POSSIBLE WANT CATEGORIES
// CALLBACK: CALLBACK FUNCTION TO INJECT THE RESPONSE CATEGORIES INTO SORT OPTIONS

const getCategories = (callback) => {
    axios.get(`${WANT_URL}/api/category`, 
        { 
            headers: { 
                Accept: 'application/json', 
                Authorization: `Bearer ${localStorage.getItem('token')}` 
            }
        })
        .then((response) => {
            // CATEGORIES RETRIEVAL SUCCESSFUL
            console.log('categories: ');
            console.log(response.data);
            callback(response.data);
        })
        .catch((error) => {
            // CATEGORIES RETRIEVAL UNSUCCESSFUL
            console.log('Error: ' + error);
        });
}

export { applySearchTerm, applyFilters, getCategories };