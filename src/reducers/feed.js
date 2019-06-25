import { UPDATE_FEED, ADD_WANTS, SET_NEXT_PAGE_URL, SET_HAS_MORE_WANTS } from '../actions/constants';

const feed = {
    wants: [],
    next_page_url: null,
    hasMoreWants: true,
    recc_id: null
}

export default (state = feed, action) => {
    switch (action.type) {
        case UPDATE_FEED:
            return {
                ...state,
                wants: action.feed ? action.feed.data : [],
                next_page_url: action.feed ? action.feed.next_page_url : null,
                recc_id: action.feed ? action.feed.recc_id : null
            }
        case ADD_WANTS:            
            return {
                ...state,
                wants: [...state.wants, ...action.wants]
            }
        case SET_NEXT_PAGE_URL:
            return {
                ...state,
                next_page_url: action.url
            }
        case SET_HAS_MORE_WANTS:
            return {
                ...state,
                hasMoreWants: action.status
            }
        default:
            return state;
    }
}