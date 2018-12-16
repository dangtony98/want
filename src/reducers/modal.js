const modal = {
    modalWantId: null,
    detailsModalIsExpanded: false,
    acceptModalIsExpanded: false,
    settingsPaymentModalIsExpanded: false
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
                modalWantId: null,
                detailsModalIsExpanded: false
            }
        case 'OPEN_ACCEPT_MODAL_ISEXPANDED':
            return {
                ...state,
                acceptModalIsExpanded: true,
                detailsModalIsExpanded: false
            }
        case 'CLOSE_ACCEPT_MODAL_ISEXPANDED':
            return {
                ...state,
                modalWantId: null,
                acceptModalIsExpanded: false
            }
        case 'OPEN_SETTINGS_PAYMENT_MODAL_ISEXPANDED':
            return {
                ...state,
                settingsPaymentModalIsExpanded: true
            }
        case 'CLOSE_SETTINGS_PAYMENT_MODAL_ISEXPANDED':
            return {
                ...state,
                settingsPaymentModalIsExpanded: false
            }
        case 'SET_MODAL_WANT_ID':
            return {
                ...state,
                modalWantId: action.wantId
            }
        default:
            return state;
    }
}