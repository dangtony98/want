import { CHANGE_SELECTED_PREFERENCE } from './constants';

const changeSelectedPreference = (preference) => ({
    type: CHANGE_SELECTED_PREFERENCE,
    preference
});

export { changeSelectedPreference };