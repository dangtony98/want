import axios from 'axios';

const WANT_URL = 'https://dry-mesa-87903.herokuapp.com'

// CHECKAUTHENTICATION()

// GETS AN "AUTHENTICATED OR NOT" FROM THE SERVER BASED ON STORED LOCAL TOKEN
// PROPS: CONTAINS PUSH() FUNC
// CALLBACK: THE SETSTATE CALLBACK TO ENABLE COMPONENT RENDERING IN HOC

const checkAuthentication = (props, callback) => {
    axios.get(`${WANT_URL}/api/user`, 
        { 
            headers: { 
                'Accept': 'application/json', 
                'Authorization': `Bearer ${localStorage.getItem('token')}` 
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