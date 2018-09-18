import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import layout from '../reducers/layout';

export default createStore(combineReducers({
    layout,
    form: formReducer
}));