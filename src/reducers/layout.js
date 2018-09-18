const layout = {
    postIsExpanded: false,
    sortIsExpanded: false
}

export default (state = layout, action) => {
    switch (action.type) {
        case 'OPEN_POST_ISEXPANDED':
            return {
                ...state,
                postIsExpanded: true
            }
        case 'CLOSE_POST_ISEXPANDED':
            return {
                ...state,
                postIsExpanded: false
            }
        case 'INVERT_SORT_ISEXPANDED':
            return {
                ...state,
                sortIsExpanded: !state.sortIsExpanded
            }
        default:
            return state;
    }
}