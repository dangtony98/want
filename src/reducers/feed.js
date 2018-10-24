const feed = {
    wants: [{
        firstName: 'John',
        wantId: '9bf4124d8e',
        photo: 'https://images.unsplash.com/photo-1530983822321-fcac2d3c0f06?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0ee757d7b18ec14dd482d03c4daa2bac&auto=format&fit=crop&w=2219&q=80',
        timestamp: '5s',
        title: 'Buy and deliver groceries from Wegmans',
        pay: 20,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'
    }, {
        firstName: 'Mary',
        wantId: '9bf400398e',
        photo: 'https://images.unsplash.com/photo-1534837493085-530e3eee5061?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4a4e6c991b867fdfc9e678e7f18a4f90&auto=format&fit=crop&w=2250&q=80',
        timestamp: '20s',
        title: 'Clean apartment',
        pay: 25,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'
    }, {
        firstName: 'Jane',
        wantId: '9cf429438a',
        photo: 'https://images.unsplash.com/photo-1535969475865-f10dc1775d43?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=56bc03ecbe352a8b3647b5def8c6eeef&auto=format&fit=crop&w=2250&q=80',
        timestamp: '1m',
        title: 'Tutor for CS2110',
        pay: 40,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'
    }, {
        firstName: 'Elon',
        wantId: '9ui431408b',
        photo: 'https://images.unsplash.com/photo-1536795311681-2221de0e792f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dbb333c60637b3754ad2e0968c1b3742&auto=format&fit=crop&w=2250&q=80',
        timestamp: '3m',
        title: 'Drive to Walmart on Fri',
        pay: 15,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'
    }]
}

export default (state = feed, action) => {
    switch (action.type) {
        default:
            return state;
    }
}