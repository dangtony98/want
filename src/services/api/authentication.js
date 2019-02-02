import axios from 'axios';
import { WANT_URL } from '../variables/variables';

// CHECKAUTHENTICATION() — GET

// GETS AN "AUTHENTICATED OR NOT" FROM THE SERVER BASED ON STORED TOKEN
// CALLBACK: THE SETSTATE CALLBACK TO ENABLE COMPONENT RENDERING IN HOC
// CALLBACK2: THE ROUTE REDIRECT CALLBACK FOR WHEN USER IS NOT LOGGED IN

const checkAuthentication = (callback, callback2) => {
    axios.get(`${WANT_URL}/api/user`, 
        { 
            headers: { 
                Accept: 'application/json', 
                Authorization: `Bearer ${localStorage.getItem('token')}` 
            }
        })
        .then((response) => {
            // AUTHENTICATION SUCCESSFUL
            callback();
        })
        .catch((error) => {
            // AUTHENTICATION UNSUCCESSFUL
            console.log('Error: ' + error);
            callback2();
        });
}

// LOGIN() — POST

// POSTS EMAIL AND PASSWORD TO THE SERVER FOR AUTHENTICATION
// STATE: CONTAINS EMAIL AND PASSWORD
// PROPS: CONTAINS PUSH() FUNC
// CALLBACK: CALLBACK TO EXECUTE UPON LOGGING IN

const login = (state, props, callback, callback2) => {
    axios.post(`${WANT_URL}/api/login`, state)
        .then((response) => {
            // SEND POST REQUEST FOR AUTHENTICATION
            localStorage.setItem('token', response.data.token);
            props.history.push("/home");
            callback();
        })
        .catch((error) => {
            console.log('Error: ' + error);
            callback();
        });
}

// LOGOUT() — POST

// POSTS STORED TOKEN TO THE SERVER TO LOGOUT
// PROPS: CONTAINS PUSH() FUNC

const logout = (props) => {
    axios.post(`${WANT_URL}/api/logout`, {

        },
        {
            headers: { 
                Accept: 'application/json', 
                Authorization: `Bearer ${localStorage.getItem('token')}` 
            }
        })
        .then((response) => {
            // AUTHENTICATION SUCCESSFUL
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            props.history.push('/');
        })
        .catch((error) => {
            // AUTHENTICATION UNSUCCESSFUL
            console.log('Error: ' + error);
        });
}

// REGISTER() — POST

// POSTS FIRST NAME, LAST NAME, EMAIL, AND PASSWORD TO TEH SERVER FOR REGISTRATION
// STATE: CONTAINS FIRST NAME, LAST NAME, EMAIL, PASSWORD, AND REPASSWORD
// PROPS: CONTAINS PUSH() FUNC
// CALLBACK: CALLBACK TO EXECUTE UPON REGISTRATION

const register = (state, props, callback) => {
    axios.post(`${WANT_URL}/api/register`, state)
        .then((response) => {
            // SEND POST REQUEST FOR REGISTRATION
            localStorage.setItem('token', response.data.token);
            props.history.push("/home");
            callback();
        })
        .catch((error) => {
            console.log('Error: ' + error);
            callback();
        });
}

export { checkAuthentication, login, logout, register };