import { CHANGE_SELECTED_DASHBOARD } from '../actions/constants';

const dashboard = {
    selectedPreference: null
}

export default (state = dashboard, action) => {
    switch (action.type) {
        case CHANGE_SELECTED_DASHBOARD:
            return {
                ...state,
                selectedPreference: action.preference
            };
        default:
            return state;
    }
}