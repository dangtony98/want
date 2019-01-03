import React from 'react';
import ReactDOM from 'react-dom';
import './styles/_styles.scss';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './store/store';

// PAGES
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import SetupPage from './components/pages/SetupPage';
import ProfilePage from './components/pages/ProfilePage';
import SettingsPage from './components/pages/SettingsPage';
import AboutUsPage from './components/pages/AboutUsPage';
import TeamPage from './components/pages/TeamPage';
import PressPage from './components/pages/PressPage';
import WantersPage from './components/pages/WantersPage';
import FulfillersPage from './components/pages/FulfillersPage';

// HOCS
import RequireAuth from './components/helpers/RequireAuth';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/" component={RequireAuth(HomePage)} exact /> {/*RequireAuth Wrapper*/}
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={SignupPage} />
                <Route path="/setup" component={SetupPage} />
                <Route path="/profile" component={RequireAuth(ProfilePage)} /> {/*RequireAuth Wrapper*/}
                <Route path="/settings" component={RequireAuth(SettingsPage)} /> {/*RequireAuth Wrapper*/}
                <Route path="/about" component={AboutUsPage} />
                <Route path="/team" component={TeamPage} />
                <Route path="/press" component={PressPage} />
                <Route path="/wanters" component={WantersPage} />
                <Route path="/fulfillers" component={FulfillersPage} />
            </Switch>
        </Router>
    </Provider>
, document.getElementById('app'));