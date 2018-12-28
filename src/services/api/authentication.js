import axios from 'axios';
import { WANT_URL } from '../variables/variables';

// CHECKAUTHENTICATION()

// GETS AN "AUTHENTICATED OR NOT" FROM THE SERVER BASED ON STORED TOKEN
// PROPS: CONTAINS PUSH() FUNC
// CALLBACK: THE SETSTATE CALLBACK TO ENABLE COMPONENT RENDERING IN HOC

const checkAuthentication = (props, callback) => {
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
            props.history.push('/login');
        });
}

// LOGIN()

// POSTS EMAIL AND PASSWORD TO THE SERVER FOR AUTHENTICATION
// STATE: CONTAINS EMAIL AND PASSWORD
// PROPS: CONTAINS PUSH() FUNC

const login = (state, props) => {
    axios.post(`${WANT_URL}/api/login`, state)
        .then((response) => {
            // SEND POST REQUEST FOR AUTHENTICATION
            localStorage.setItem('token', response.data.token);
            props.history.push("/");
        })
        .catch((error) => {
            console.log('Error: ' + error);
        });
}

// LOGOUT()

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
            props.history.push('/login');
        })
        .catch((error) => {
            // AUTHENTICATION UNSUCCESSFUL
            console.log('Error: ' + error);
        });
}

// REGISTER()

// POSTS FIRST NAME, LAST NAME, EMAIL, AND PASSWORD TO TEH SERVER FOR REGISTRATION
// STATE: CONTAINS FIRST NAME, LAST NAME, EMAIL, PASSWORD, AND REPASSWORD
// PROPS: CONTAINS PUSH() FUNC

const register = (state, props) => {
    axios.post(`${WANT_URL}/api/register`, state)
        .then((response) => {
            // SEND POST REQUEST FOR REGISTRATION
            console.log('Sent Register POST request');
            localStorage.setItem('token', response.data.token);
            props.history.push("/");
        })
        .catch((error) => {
            console.log('Error: ' + error);
        });
}

// GETUSER()

// GETS USER ADMIN DATA
// PROPS: CONTAINS SETUSER() FUNC

const getUser = (props) => {
    axios.get(`${WANT_URL}/api/user`, 
        {
            headers: { 
                Accept: 'application/json', 
                Authorization: `Bearer ${localStorage.getItem('token')}` 
            }
        })
        .then((response) => {
            // SEND POST REQUEST TO LOAD USER
            props.setUser(response.data.user);
        })
        .catch((error) => {
            console.log('Error: ' + error);
        });
}

export { checkAuthentication, login, logout, register, getUser };