import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import admin from '../reducers/admin';
import layout from '../reducers/layout';
import current from '../reducers/current';
import feed from '../reducers/feed';
import filter from '../reducers/filter';
import modal from '../reducers/modal';
import settings from '../reducers/settings';
import notifications from '../reducers/notifications';

export default createStore(combineReducers({
    admin,
    layout,
    current,
    feed,
    filter,
    modal,
    settings,
    notifications,
    form: formReducer
}));