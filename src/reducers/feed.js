import moment from 'moment';
import { UPDATE_FEED } from '../actions/constants';

const feed = {
    wants: null
}

export default (state = feed, action) => {
    switch (action.type) {
        case UPDATE_FEED:
            return {
                ...state,
                wants: action.feed.data
            }
        default:
            return state;
    }
}