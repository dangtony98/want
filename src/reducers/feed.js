import { UPDATE_FEED } from '../actions/constants';

const feed = {
    wants: []
}

export default (state = feed, action) => {
    switch (action.type) {
        case UPDATE_FEED:
            return {
                ...state,
                wants: action.feed.data ? action.feed.data : []
            }
        default:
            return state;
    }
}