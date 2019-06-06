import { CHANGE_SELECTED_PREFERENCE, STORE_CARDS } from '../actions/constants';

const settings = {
    selectedPreference: null,
    cards: []
}

export default (state = settings, action) => {
    switch (action.type) {
        case CHANGE_SELECTED_PREFERENCE:
            return {
                ...state,
                selectedPreference: action.preference
            }
        case STORE_CARDS:
            return {
                ...state,
                cards: action.cards
            }
        default:
            return state;
    }
}