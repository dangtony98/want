/* 

DETAILS MODAL TYPES:
NONE: A WANT FORMAT BELONGING TO THE NEWSFEED
STANDARD: AN EXPANDED WANT FORMAT BELONGING TO THE STANDARD DETAILS MODAL
BIDDING: A WANT FORMAT SHOWING THE WANT'S POTENTIAL FULFILLERS
WANT: A WANT FORMAT ENABLING PAYMENT TO THE FULFILLER
FULFILLMENT: A WANT FORMAT ENABLING THE USER TO REQUEST PAYMENT FROM THE WANTER

*/

import {
    OPEN_DETAILS_MODAL_ISEXPANDED,
    CLOSE_DETAILS_MODAL_ISEXPANDED,
    OPEN_ACCEPT_MODAL_ISEXPANDED,
    CLOSE_ACCEPT_MODAL_ISEXPANDED,
    OPEN_SETTINGS_PAYMENT_MODAL_ISEXPANDED,
    CLOSE_SETTINGS_PAYMENT_MODAL_ISEXPANDED,
    SET_MODAL_WANT_ID,
    SET_DETAILS_MODAL_TYPE
} from '../actions/constants';

const modal = {
    modalWantId: null,
    detailsModalIsExpanded: false,
    acceptModalIsExpanded: false,
    settingsPaymentModalIsExpanded: false,
    biddersModalIsExpanded: false,
    detailsModalType: null
}

export default (state = modal, action) => {
    switch (action.type) {
        case OPEN_DETAILS_MODAL_ISEXPANDED:
            return {
                ...state,
                detailsModalIsExpanded: true
            }
        case CLOSE_DETAILS_MODAL_ISEXPANDED:
            return {
                ...state,
                modalWantId: null,
                detailsModalIsExpanded: false
            }
        case OPEN_ACCEPT_MODAL_ISEXPANDED:
            return {
                ...state,
                acceptModalIsExpanded: true,
                detailsModalIsExpanded: false
            }
        case CLOSE_ACCEPT_MODAL_ISEXPANDED:
            return {
                ...state,
                modalWantId: null,
                acceptModalIsExpanded: false
            }
        case OPEN_SETTINGS_PAYMENT_MODAL_ISEXPANDED:
            return {
                ...state,
                settingsPaymentModalIsExpanded: true
            }
        case CLOSE_SETTINGS_PAYMENT_MODAL_ISEXPANDED:
            return {
                ...state,
                settingsPaymentModalIsExpanded: false
            }
        case SET_MODAL_WANT_ID:
            return {
                ...state,
                modalWantId: action.wantId
            }
        case SET_DETAILS_MODAL_TYPE:
            return {
                ...state,
                detailsModalType: action.modalType
            }
        default:
            return state;
    }
}