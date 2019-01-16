import axios from 'axios';
import { WANT_URL } from '../variables/variables';

// DELETEWANT() — DELETE

// DELETES THE GIVEN WANT
// ID: THE ID OF THE GIVEN WANT

const deleteWant = (id, callback) => {
    console.log('deleteWant() triggered with id: ' + id);
    axios.delete(`${WANT_URL}/api/want/${id}`,
        { 
            headers: { 
                Accept: 'application/json', 
                Authorization: `Bearer ${localStorage.getItem('token')}` 
            }
        })
        .then((response) => {
            // DELETE WANT SUCCESSFUL
            console.log('deleteWant() response: ');
            console.log(response);
            callback();
        })
        .catch((error) => {
            // DELETE WANT UNSUCCESSFUL
            console.log('Error: ' + error);
        });
}

export { deleteWant };