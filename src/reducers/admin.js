import { IMAGE_URL } from '../services/variables/variables';
import { SET_USER, SET_PHOTO } from '../actions/constants';

const admin = {
    id: null,
    first_name: null,
    last_name: null,
    email: null,
    tag_line: '',
    description: '',
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
                photo: `${IMAGE_URL}/${action.user.avatar}`,
                tag_line: action.user.tag_line,
                description: action.user.description
            };
        case SET_PHOTO:
            return {
                ...state,
                photo: `${IMAGE_URL}/${action.photo}`
            }
        default:
            return state;
    }
}