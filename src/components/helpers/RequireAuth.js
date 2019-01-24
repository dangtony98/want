import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { checkAuthentication } from '../../services/api/authentication';

export default (ComposedComponent) => {

  class RequireAuth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false
        }
    }

    componentWillMount() {
        checkAuthentication(() => { 
            this.setState({
                isAuthenticated: true
            });  
        }, () => {
            this.props.history.push('/');
        });
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