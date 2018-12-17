import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import admin from '../reducers/admin';
import layout from '../reducers/layout';
import current from '../reducers/current';
import feed from '../reducers/feed';
import filter from '../reducers/filter';
import chat from '../reducers/chat';
import modal from '../reducers/modal';
import profile from '../reducers/profile';
import settings from '../reducers/settings';
import notifications from '../reducers/notifications';

export default createStore(combineReducers({
    admin,
    layout,
    current,
    feed,
    filter,
    chat,
    modal,
    profile,
    settings,
    notifications,
    form: formReducer
}));