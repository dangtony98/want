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

// UNBOOKMARKWANT() — POST

// UNNBOOKMARKS THE GIVEN WANT
// ID: THE ID OF THE GIVEN WANT
// CALLBACK: CALLBACK TO UPDATE FILLED/UNFILLED HEART BASED ON REQUEST RESPONSE

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

// COMMENTWANT() — POST

// COMMENT_BODY: THE COMMENT CONTENTS
// ID: THE ID OF THE GIVEN WANT
// CALLBACK: CALLBACK TO POST COMMENT ON FRONTEND

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
        callback();
    })
    .catch((error) => {
        // COMMENT WANT UNSUCCESSFUL
        console.log('Error: ' + error);
    });
}

// REPLYWANT() — POST

// COMMENT_BODY: THE REPLY CONTENTS
// ID: THE ID OF THE GIVEN WANT
// ID2: THE ID OF THE GIVEN COMMENT
// CALLBACK: CALLBACK TO POST REPLY ON FRONTEND

const replyWant = (comment_body, id, id2, callback) => {
    axios.post(`${WANT_URL}/api/reply`, {
        comment_body,
        want_id: id,
        comment_id: id2
    },
    { 
        headers: {
            Accept: 'application/json', 
            Authorization: `Bearer ${localStorage.getItem('token')}` 
        }
    })
    .then((response) => {
        // REPLY WANT SUCCESSFUL
        console.log('replyWant() response: ');
        console.log(response);
        callback();
    })
    .catch((error) => {
        // REPLY WANT UNSUCCESSFUL
        console.log('Error: ' + error);
    });
}

export { getWant, deleteWant, bookmarkWant, unbookmarkWant, commentWant, replyWant };