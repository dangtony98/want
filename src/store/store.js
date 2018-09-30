import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import admin from '../reducers/admin';
import layout from '../reducers/layout';
import filter from '../reducers/filter';
import chat from '../reducers/chat';

export default createStore(combineReducers({
    admin,
    layout,
    filter,
    chat,
    form: formReducer
}));