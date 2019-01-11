import { UPDATE_SEARCH_TERM, STORE_CATEGORIES, UPDATE_CHOSEN_FILTERS } from '../actions/constants';

const filter = {
    searchTerm: '',
    categories: [],
    chosen: {
        categories: { value: 0, label: 'None '},
        sort_by: { value: '', label: 'None'}
    }
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
        case UPDATE_CHOSEN_FILTERS:
            return {
                ...state,
                chosen: {
                    ...state.chosen,
                    [action.name] : action.e
                }
            }
        default:
            return state;
    }
}