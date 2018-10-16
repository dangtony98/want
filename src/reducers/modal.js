const modal = {
    detailsModalIsExpanded: false
}

export default (state = modal, action) => {
    switch (action.type) {
        case 'OPEN_DETAILS_MODAL_ISEXPANDED':
            return {
                ...state,
                detailsModalIsExpanded: true
            }
        case 'CLOSE_DETAILS_MODAL_ISEXPANDED':
            return {
                ...state,
                detailsModalIsExpanded: false
            }
        default:
            return state;
    }
}