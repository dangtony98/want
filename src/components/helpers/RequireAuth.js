import React, { Component } from 'react'
import { withRouter } from 'react-router';
import axios from 'axios';

const checkAuthentication = (props, callback) => {
    axios.get('http://94a65306.ngrok.io/api/user', 
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

export default (ComposedComponent) => {

  class RequireAuth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // *** SET TO FALSE IN PRODUCTION
            isAuthenticated: true
        }
    }

    componentWillMount() {
        // *** UNCOMMENT IN PRODUCTION
        // checkAuthentication(this.props, () => { 
        //     this.setState({
        //         isAuthenticated: true
        //     });  
        // });
    }

    render() {
        const { isAuthenticated } = this.state;
        return (
            <div>
                {isAuthenticated && <ComposedComponent />}
            </div>
        );
    }
  }

  return withRouter(RequireAuth);
};