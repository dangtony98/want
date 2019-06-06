import { CHANGE_SELECTED_PREFERENCE } from './constants';
import { STORE_CARDS } from '../actions/constants';

const changeSelectedPreference = (preference) => ({
    type: CHANGE_SELECTED_PREFERENCE,
    preference
});

const storeCards = (cards) => ({
    type: STORE_CARDS,
    cards
});

export { changeSelectedPreference, storeCards };