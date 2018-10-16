import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import admin from '../reducers/admin';
import layout from '../reducers/layout';
import current from '../reducers/current';
import filter from '../reducers/filter';
import chat from '../reducers/chat';
import modal from '../reducers/modal';

export default createStore(combineReducers({
    admin,
    layout,
    current,
    filter,
    chat,
    modal,
    form: formReducer
}));