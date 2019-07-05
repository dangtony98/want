import { CHANGE_SELECTED_DASHBOARD } from '../actions/constants';

const dashboard = {
    selectedDashboard: null
}

export default (state = dashboard, action) => {
    switch (action.type) {
        case CHANGE_SELECTED_DASHBOARD:
            return state;
        default:
            return state;
    }
}