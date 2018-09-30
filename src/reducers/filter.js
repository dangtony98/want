const filter = {
    searchTerm: ''
}

export default (state = filter, action) => {
    switch (action.type) {
        case 'UPDATE_SEARCH_TERM':
            return {
                ...state,
                searchTerm: action.searchTerm
            }
        default:
            return state;
    }
}