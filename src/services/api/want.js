import axios from 'axios';
import { WANT_URL } from '../variables/variables';

// GETWANT() — GET

// GETS A GIVEN WANT
// ID: THE ID OF THE GIVEN WANT

const getWant = (id, callback) => {
    axios.get(`${WANT_URL}/api/want/${id}`,
        { 
            headers: { 
                Accept: 'application/json', 
                Authorization: `Bearer ${localStorage.getItem('token')}` 
            }
        })
        .then((response) => {
            // GET WANT SUCCESSFUL
            callback(response);
        })
        .catch((error) => {
            // GET WANT UNSUCCESSFUL
            console.log('Error: ' + error);
        });
}

// DELETEWANT() — DELETE

// DELETES THE GIVEN WANT
// ID: THE ID OF THE GIVEN WANT

const deleteWant = (id, callback) => {
    axios.delete(`${WANT_URL}/api/want/${id}`,
        { 
            headers: { 
                Accept: 'application/json', 
                Authorization: `Bearer ${localStorage.getItem('token')}` 
            }
        })
        .then((response) => {
            // DELETE WANT SUCCESSFUL
            console.log(response);
            callback();
        })
        .catch((error) => {
            // DELETE WANT UNSUCCESSFUL
            console.log('Error: ' + error);
        });
}

// BOOKMARKWANT() — POST

// BOOKMARKS THE GIVEN WANT
// ID: THE ID OF THE GIVEN WANT
// CALLBACK: CALLBACK TO UPDATE FILLED/UNFILLED HEART BASED ON REQUEST RESPONSE

const bookmarkWant = (id, callback) => {
    axios.post(`${WANT_URL}/api/bookmark`, {
        want_id: id
    },
    { 
        headers: {
            Accept: 'application/json', 
            Authorization: `Bearer ${localStorage.getItem('token')}` 
        }
    })
    .then((response) => {
        // BOOKMARK WANT SUCCESSFUL
        console.log('bookmarkWant() response: ');
        console.log(response);
        callback(response);
    })
    .catch((error) => {
        // BOOKMARK WANT UNSUCCESSFUL
        console.log('Error: ' + error);
    });
}

const unbookmarkWant = (id, callback) => {
    axios.delete(`${WANT_URL}/api/bookmark`,
        { 
            headers: { 
                Accept: 'application/json', 
                Authorization: `Bearer ${localStorage.getItem('token')}` 
            },
            data: {
                bookmark_id: id
            }
        })
        .then((response) => {
            // UNBOOKMARK WANT SUCCESSFUL
            console.log('unbookmarkWant() response: ');
            console.log(response);
            callback();
        })
        .catch((error) => {
            // UNBOOKMARK WANT UNSUCCESSFUL
            console.log('Error: ' + error);
        });
}

const commentWant = (comment_body, id, callback) => {
    axios.post(`${WANT_URL}/api/comment`, {
        comment_body,
        want_id: id
    },
    { 
        headers: {
            Accept: 'application/json', 
            Authorization: `Bearer ${localStorage.getItem('token')}` 
        }
    })
    .then((response) => {
        // COMMENT WANT SUCCESSFUL
        console.log('commentWant() response: ');
        console.log(response);
        callback();
    })
    .catch((error) => {
        // COMMENT WANT UNSUCCESSFUL
        console.log('Error: ' + error);
    });
}

const replyWant = () => {

}

export { getWant, deleteWant, bookmarkWant, unbookmarkWant, commentWant, replyWant };