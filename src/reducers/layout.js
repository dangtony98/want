const layout = {
    postIsExpanded: false,
    sortIsExpanded: false,
    chatIsExpanded: false
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
        case 'OPEN_CHAT_ISEXPANDED':
            return {
                ...state,
                chatIsExpanded: true
            }
        case 'CLOSE_CHAT_ISEXPANDED':
            return {
                ...state,
                chatIsExpanded: false
            }
        default:
            return state;
    }
}