import { CHANGE_SELECTED_DASHBOARD } from './constants';

const changeSelectedDashboard = (preference) => ({
    type: CHANGE_SELECTED_DASHBOARD,
    preference
});

export { changeSelectedDashboard };