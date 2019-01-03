import axios from 'axios';
import { WANT_URL } from '../variables/variables';

// GETPROFILE()

// GETS A USER'S PUBLIC PROFILE GIVEN A USER'S ID
// USERID: THE USER TO RETRIEVE

const getUser = (userId, props) => {

}

// GETREVIEWS()

// GETS A SET OF REVIEWS GIVEN A REQUESTED PAGE
// PAGE: THE PAGE TO RETRIEVE
// CALLBACK: THE SETSTATE CALLBACK TO ENABLE COMPONENT RERENDERING

const getReviews = (page, callback) => {
    callback();
}

export { getUser, getReviews };