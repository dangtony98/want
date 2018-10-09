const current = {
    currentWants: [{
        isMatched: false,
        fulfiller: {
            firstName: null,
            uuid: null
        },
        body: {
            title: 'Buy and deliver Starbucks to 407 College Ave',
            pay: 5,
            description: "I'd like someone to deliver a grande coldbrew to my apartment at 407 College Ave tomorrow morning around 8:15am. Thanks!"
        },
        fulfillerOptions: [{
            firstName: 'Daria',
            rating: 4.72,
            counterOffer: 7.5
        }, {
            firstName: 'Ethan',
            rating: 4.64,
            counterOffer: 6.5
        }, {
            firstName: 'Peter',
            rating: 4.31,
            counterOffer: 10
        }]
    }, {
        isMatched: true,
        fulfiller: {
            firstName: 'Maxwell',
            uuid: ''
        },
        body: {
            title: 'Buy and deliver Starbucks to 407 College Ave',
            pay: 10,
            description: "I'd like someone to deliver a grande coldbrew to my apartment at 407 College Ave tomorrow morning around 8:15am. Thanks!"
        }
    }],
    currentFulfillments: []
}

export default (state = current, action) => {
    switch (action.type) {
        default:
            return state;
    }
}