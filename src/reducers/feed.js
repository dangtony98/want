import moment from 'moment';

const feed = {
    wants: [{
        firstName: 'John',
        wantId: '9bf4124d8e',
        photo: 'https://images.unsplash.com/photo-1530983822321-fcac2d3c0f06?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0ee757d7b18ec14dd482d03c4daa2bac&auto=format&fit=crop&w=2219&q=80',
        timestamp: moment().subtract(Math.random() * 5, 'seconds'),
        title: 'Buy and deliver groceries from Wegmans',
        pay: 20,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'
    }, {
        firstName: 'Mary',
        wantId: '9bf400398e',
        photo: 'https://images.unsplash.com/photo-1534837493085-530e3eee5061?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4a4e6c991b867fdfc9e678e7f18a4f90&auto=format&fit=crop&w=2250&q=80',
        timestamp: moment().subtract(Math.random() * 20, 'seconds'),
        title: 'Clean apartment',
        pay: 25,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'
    }, {
        firstName: 'Jane',
        wantId: '9cf429438a',
        photo: 'https://images.unsplash.com/photo-1535969475865-f10dc1775d43?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=56bc03ecbe352a8b3647b5def8c6eeef&auto=format&fit=crop&w=2250&q=80',
        timestamp: moment().subtract(Math.random() * 80, 'seconds'),
        title: 'Tutor for CS2110',
        pay: 40,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'
    }, {
        firstName: 'Josh',
        wantId: '9ui421608a',
        photo: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7e89aa20603ea9fe62ddc6014276ca41&auto=format&fit=crop&w=934&q=80',
        timestamp: moment().subtract(Math.random() * 320, 'seconds'),
        title: 'Buy and deliver coffee tomorrow morning',
        pay: 5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'
    }, {
        firstName: 'Elizabeth',
        wantId: '9bf4g24s8e',
        photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a3fa46375259c39d07d0227e8ade6daa&auto=format&fit=crop&w=934&q=80',
        timestamp: moment().subtract(Math.random() * 1280, 'seconds'),
        title: 'Provide study guide for HADM2110',
        pay: 5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'
    }, {
        firstName: 'Laura',
        wantId: '9sf4si3c81',
        photo: 'https://images.unsplash.com/photo-1535324492437-d8dea70a38a7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5020948430163a1dccb8aa26070664c4&auto=format&fit=crop&w=1287&q=80',
        timestamp: moment().subtract(Math.random() * 5120, 'seconds'),
        title: 'Fix broken furniture',
        pay: 25,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'
    }, {
        firstName: 'Rafael',
        wantId: '919a31sc8b',
        photo: 'https://images.unsplash.com/photo-1505503693641-1926193e8d57?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=22e1d8d5234640647a521b665a04c050&auto=format&fit=crop&w=934&q=80',
        timestamp: moment().subtract(Math.random() * 10240, 'seconds'),
        title: 'Partner up for communications project',
        pay: 0,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'
    }, {
        firstName: 'Doris',
        wantId: '9ui39sj08b',
        photo: 'https://images.unsplash.com/photo-1500080209535-717dd4ebaa6b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ddee81e2e574e8190b07139ddb0f1938&auto=format&fit=crop&w=1287&q=80',
        timestamp: moment().subtract(Math.random() * 20480, 'seconds'),
        title: 'Develop logo options for prospective startup',
        pay: 40,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'
    }]
}

export default (state = feed, action) => {
    switch (action.type) {
        case 'UPDATE_FEED':
            return state;
        default:
            return state;
    }
}