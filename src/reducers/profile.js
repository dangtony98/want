const profile = {
    summary: {
        firstName: 'John',
        photo: 'https://images.unsplash.com/photo-1530983822321-fcac2d3c0f06?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0ee757d7b18ec14dd482d03c4daa2bac&auto=format&fit=crop&w=2219&q=80',
        shortDescription: 'Chef, amateur photographer and cat lover',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'
    },
    statistics: {
        rating: 4.79,
        fulfillments: 132,
        reviews: 15
    },
    reviews: [{
        firstName: 'Isabella',
        photo: 'https://images.unsplash.com/photo-1530243301483-fb1e29cb7862?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3bc41113a3248b45540fe023c9a6ac98&auto=format&fit=crop&w=934&q=80',
        timestamp: 'November, 2018',
        rating: 4.43,
        title: 'Help take a professional profile picture for LinkedIn',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'
    }, {
        firstName: 'Melinda',
        photo: 'https://images.unsplash.com/photo-1522194626446-972182d73ab0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4d10b01f2e1238fda5b356ac1842dc60&auto=format&fit=crop&w=934&q=80',
        timestamp: 'November, 2018',
        rating: 3.23,
        title: 'Teach how to cook Italian meals',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'
    }, {
        firstName: 'Alice',
        photo: 'https://images.unsplash.com/photo-1525265928020-e0e0346c4987?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b7c22b54cd0f605dcd58893c375a1fbc&auto=format&fit=crop&w=1300&q=80',
        timestamp: 'November, 2018',
        rating: 4.6,
        title: 'Take pictures for our startup landing page',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'
    }]
}

export default (state = profile, action) => {
    switch (action.type) {
        case 'UPDATE_REVIEWS':
            // RETURN STATE;
            return state;
        default:
            return state;
    }
}