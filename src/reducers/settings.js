const settings = {
    selectedPreference: null,
    savedCards: [{
        id: 'card_1DcpzsHKfw8WktKFWZRjbR10',
        last4: '4242',
        brand: 'Visa',
        exp_month: 11,
        exp_year: 2023
    }, {
        id: 'card_1FcnmsHKfc1WstKFFkwjbR20',
        last4: '9283',
        brand: 'Master',
        exp_month: 12,
        exp_year: 2023
    }]
}

export default (state = settings, action) => {
    switch (action.type) {
        case 'CHANGE_SELECTED_PREFERENCE':
            return {
                ...state,
                selectedPreference: action.preference
            }
        default:
            return state;
    }
}