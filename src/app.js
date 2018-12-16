import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/_styles.scss';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './store/store';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import SetupPage from './components/pages/SetupPage';
import ProfilePage from './components/pages/ProfilePage';
import SettingsPage from './components/pages/SettingsPage';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={SignupPage} />
                <Route path="/setup" component={SetupPage} />
                <Route path="/profile" component={ProfilePage} />
                <Route path="/settings" component={SettingsPage} />
            </Switch>
        </Router>
    </Provider>
, document.getElementById('app'));