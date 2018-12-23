const openDetailsModalIsExpanded = () => ({
    type: 'OPEN_DETAILS_MODAL_ISEXPANDED'
});

const closeDetailsModalIsExpanded = () => ({
    type: 'CLOSE_DETAILS_MODAL_ISEXPANDED'
});

const openAcceptModalIsExpanded = () => {
    // PERFORM REDUX PROMISE TO MAKE SURE WANT HAS BEEN ACCEPTED
    return ({
        type: 'OPEN_ACCEPT_MODAL_ISEXPANDED'
    })
};

const closeAcceptModalIsExpanded = () => ({
    type: 'CLOSE_ACCEPT_MODAL_ISEXPANDED'
});

const closeSettingsPaymentModalIsExpanded = () => ({
    type: 'CLOSE_SETTINGS_PAYMENT_MODAL_ISEXPANDED'
});

const openSettingsPaymentModalIsExpanded = () => ({
    type: 'OPEN_SETTINGS_PAYMENT_MODAL_ISEXPANDED'
});

const setModalWantId = (wantId) => ({
    type: 'SET_MODAL_WANT_ID',
    wantId
});

const setDetailsModalType = (modalType) => {
    return ({
        type: 'SET_DETAILS_MODAL_TYPE',
        modalType
    });
};

export {
    openDetailsModalIsExpanded,
    closeDetailsModalIsExpanded,
    openAcceptModalIsExpanded,
    closeAcceptModalIsExpanded,
    openSettingsPaymentModalIsExpanded,
    closeSettingsPaymentModalIsExpanded,
    setModalWantId,
    setDetailsModalType
}