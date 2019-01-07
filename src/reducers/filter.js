import { UPDATE_SEARCH_TERM, STORE_CATEGORIES } from '../actions/constants';

const filter = {
    searchTerm: '',
    categories: []
}

export default (state = filter, action) => {
    switch (action.type) {
        case UPDATE_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.searchTerm
            }
        case STORE_CATEGORIES:
            return {
                ...state,
                categories: action.categories
            }
        default:
            return state;
    }
}