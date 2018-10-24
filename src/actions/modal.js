const openDetailsModalIsExpanded = () => ({
    type: 'OPEN_DETAILS_MODAL_ISEXPANDED'
});

const closeDetailsModalIsExpanded = () => ({
    type: 'CLOSE_DETAILS_MODAL_ISEXPANDED'
});

const setDetailsModalWantId = (wantId) => ({
    type: 'SET_DETAILS_MODAL_WANT_ID',
    wantId
});

export {
    openDetailsModalIsExpanded,
    closeDetailsModalIsExpanded,
    setDetailsModalWantId
}