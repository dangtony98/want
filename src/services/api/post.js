import axios from 'axios';

const WANT_URL = 'https://dry-mesa-87903.herokuapp.com'

// POST()

// POSTS A WANT CONTANING A TITLE, COST, CATEGORY, AND DESCRIPTION TO THE SERVER

const post = (form, scroll, callback) => {
    axios.post(`${WANT_URL}/api/want`, form,
    {
        headers: { 
            'Accept': 'application/json', 
            'Authorization': `Bearer ${localStorage.getItem('token')}` 
        }
    })
    .then((response) => {
        // POST SUCCESSFUL
        callback();
        scroll.scrollToTop();
    })
    .catch((error) => {
        // POST UNSUCCESSFUL
        console.log('Error: ' + error);
        console.log('Failed Form: ');
        console.log(form);
    });
}

export { post };