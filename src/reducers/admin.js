import { IMAGE_URL } from '../services/variables/variables';
import { SET_USER } from '../actions/constants';

const admin = {
    id: null,
    first_name: null,
    last_name: null,
    email: null,
    subtitle: 'Chef, amateur photographer, and cat lover',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
    photo: null
}

export default (state = admin, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                id: action.user.id,
                first_name: action.user.first_name,
                last_name: action.user.last_name,
                email: action.user.email,
                photo: `${IMAGE_URL}/${action.user.avatar}`
            };
        default:
            return state;
    }
}