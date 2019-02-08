import {
    CLOSE_SETTINGS_PAYMENT_MODAL_ISEXPANDED,
    OPEN_SETTINGS_PAYMENT_MODAL_ISEXPANDED
} from './constants';

const closeSettingsPaymentModalIsExpanded = () => ({
    type: CLOSE_SETTINGS_PAYMENT_MODAL_ISEXPANDED
});

const openSettingsPaymentModalIsExpanded = () => ({
    type: OPEN_SETTINGS_PAYMENT_MODAL_ISEXPANDED
});

export {
    openSettingsPaymentModalIsExpanded,
    closeSettingsPaymentModalIsExpanded
}