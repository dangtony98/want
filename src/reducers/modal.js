import {
    OPEN_SETTINGS_PAYMENT_MODAL_ISEXPANDED,
    CLOSE_SETTINGS_PAYMENT_MODAL_ISEXPANDED
} from '../actions/constants';

const modal = {
    settingsPaymentModalIsExpanded: false,
}

export default (state = modal, action) => {
    switch (action.type) {
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
        default:
            return state;
    }
}