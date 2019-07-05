import React from 'react';
import ReactDOM from 'react-dom';
import recombee from 'recombee-js-api-client';
import './styles/_styles.scss';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './store/store';
import { RECOMBEE_DB, RECOMBEE_TOKEN } from './services/variables/variables';

// PAGES
import LandingPage from './components/pages/LandingPage';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import SetupPage from './components/pages/SetupPage';
import WantPage from './components/pages/WantPage';
import ProfilePage from './components/pages/ProfilePage';
import InboxPage from './components/pages/InboxPage';
import SettingsPage from './components/pages/SettingsPage';
import DashboardPage from './components/pages/DashboardPage';
import AboutUsPage from './components/pages/AboutUsPage';
import TeamPage from './components/pages/TeamPage';
import PressPage from './components/pages/PressPage';
import WantersPage from './components/pages/WantersPage';
import FulfillersPage from './components/pages/FulfillersPage';

// HOCS
import RequireAuth from './components/helpers/RequireAuth';

const client = new recombee.ApiClient(RECOMBEE_DB, RECOMBEE_TOKEN);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/" component={LandingPage} exact />
                <Route path="/home" component={RequireAuth(HomePage)} exact />
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={SignupPage} />
                <Route path="/setup" component={SetupPage} />
                <Route path="/want/:id" component={RequireAuth(WantPage)} exact />
                <Route path="/profile/:id" component={RequireAuth(ProfilePage)} exact />
                <Route path="/inbox" component={RequireAuth(InboxPage)} />
                <Route path="/settings" component={RequireAuth(SettingsPage)} />
                <Route path="/dashboard" component={RequireAuth(DashboardPage)} />
                <Route path="/about" component={AboutUsPage} />
                <Route path="/team" component={TeamPage} />
                <Route path="/press" component={PressPage} />
                <Route path="/wanters" component={WantersPage} />
                <Route path="/fulfillers" component={FulfillersPage} />
            </Switch>
        </Router>
    </Provider>
, document.getElementById('app'));

export { client };
