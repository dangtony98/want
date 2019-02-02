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

export { getWant, deleteWant };