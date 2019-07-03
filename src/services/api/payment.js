import axios from 'axios';
import { WANT_URL } from '../variables/variables';

// ADDCARD() — POST

// ADDS A CARD TO THE USER'S WANT ACCOUNT
// DETAILS: CONTAINS ccExpiryYear, ccExpiryMonth, card_no
// CALLBACK: CALLBACK TO TRIGGER UPON SUCCESSFUL REQUEST

const addCard = (details, callback) => {
    axios.post(`${WANT_URL}/api/card`, {
        ...details
    },
    { 
        headers: {
            Accept: 'application/json', 
            Authorization: `Bearer ${localStorage.getItem('token')}` 
        }
    })
    .then((response) => {
        // ADD CARD SUCCESSFUL
        callback(response);
    })
    .catch((error) => {
        // ADD CARD UNSUCCESSFUL
        console.log('Error: ' + error);
    });
}

// DELETECARD() — DELETE

// DELETES A CARD FROM THE USER'S WANT ACCOUNT
// ID: THE ID OF THE CARD TO DELETE
// CALLBACK:  CALLBACK TO TRIGGER UPON SUCCESSFUL REQUEST

const deleteCard = (id, callback) => {
    axios.delete(`${WANT_URL}/api/card`,
    { 
        headers: { 
            Accept: 'application/json', 
            Authorization: `Bearer ${localStorage.getItem('token')}` 
        },
        data: {
            card_id: id
        }
    })
    .then((response) => {
        // DELETE CARD SUCCESSFUL
        callback();
    })
    .catch((error) => {
        // DELETE CARD UNSUCCESSFUL
        console.log('Error: ' + error);
    });
}

// GETCARDS() — GET 

// RETRIEVES LIST OF CARDS FROM THE USER'S WANT ACCOUNT
// CALLBACK: CALLBACK TO TRIGGER UPON SUCCESSFUL REQUEST

const getCards = (callback) => {
    axios.get(`${WANT_URL}/api/card`, 
    {
        headers: { 
            Accept: 'application/json', 
            Authorization: `Bearer ${localStorage.getItem('token')}` 
        }
    })
    .then((response) => {
        // GET CARDS SUCCESSFUL
        callback(response);
    })
    .catch((error) => {
        // GET CARDS UNSUCCESSFUL
        console.log('Error: ' + error);
    });
}

// GETBALANCE() — GET 

// GETS THE USER'S ACCOUNT BALANCE
// CALLBACK: CALLBACK TO TRIGGER WHEN ACOUNT BALANCE IS FETCHED

const getBalance = (callback) => {
    axios.get(`${WANT_URL}/api/balance`, 
    {
        headers: { 
            Accept: 'application/json', 
            Authorization: `Bearer ${localStorage.getItem('token')}` 
        }
    })
    .then((response) => {
        // GET BALANCE SUCCESSFUL
        callback(response);
    })
    .catch((error) => {
        // GET BALANCE UNSUCCESSFUL
        console.log('Error: ' + error);
    });
}

export { addCard, deleteCard, getCards, getBalance };