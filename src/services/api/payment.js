import axios from 'axios';
import { WANT_URL } from '../variables/variables';

const addCard = (details) => {

}

const deleteCard = (id) => {

}

const getCards = () => {
    axios.get(`${WANT_URL}/api/card`, 
    {
        headers: { 
            Accept: 'application/json', 
            Authorization: `Bearer ${localStorage.getItem('token')}` 
        }
    })
    .then((response) => {
        // SEND POST REQUEST TO LOAD USER
        console.log('getCard successful with response: ');
        console.log(response);
    })
    .catch((error) => {
        console.log('Error: ' + error);
    });
}

export { addCard, deleteCard, getCards };