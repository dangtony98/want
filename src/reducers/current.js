const current = {
    currentWants: [{
        isMatched: false,
        wantId: '9bf4124d8e',
        fulfiller: {
            firstName: null,
            uuid: null,
            rating: null
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
            counterOffer: 6
        }, {
            firstName: 'Peter',
            rating: 4.31,
            counterOffer: 10
        }]
    }, {
        isMatched: true,
        wantId: '1fn4339038e',
        fulfiller: {
            firstName: 'Maxwell',
            uuid: '1ac49438x',
            rating: 4.92
        },
        body: {
            title: 'Pack clothes for summer storage',
            pay: 10,
            description: "I'd like someone to deliver a grande coldbrew to my apartment at 407 College Ave tomorrow morning around 8:15am. Thanks!"
        }
    }],
    currentFulfillments: [{
        isMatched: false,
        wantId: '4dq49418z',
        wanter: {
            firstName: 'Pedro',
            uuid: '4ad44318z'
        },
        body: {
            title: 'Create website frontend for Suna Breakfast',
            pay: 300,
            description: 'We are Suna Breakfast, a rising breakfast delivery service at Cornell. We are seeking a local web developer with expertise in AngularJS. Pay is negotiable.'
        }
    }, {
        isMatched: true,
        wantId: '1aq56417a',
        wanter: {
            firstName: 'Jessica',
            uuid: '1fd0df313z'
        },
        body: {
            title: 'Share CS2110 notes',
            pay: 5,
            description: 'I '
        }
    }]
}

export default (state = current, action) => {
    switch (action.type) {
        default:
            return state;
    }
}