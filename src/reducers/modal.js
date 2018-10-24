const modal = {
    detailsModalIsExpanded: false,
    detailsModalWantId: null
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
        case 'SET_DETAILS_MODAL_WANT_ID':
            return {
                ...state,
                detailsModalWantId: action.wantId
            }
        default:
            return state;
    }
}