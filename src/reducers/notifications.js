import moment from 'moment';

/* 

NOTIFICATION TYPES:

1. ACCEPTED_WANT: A USER ACCEPTED YOUR POSTED WANT
2. COUNTERED_WANT: A USER COUNTERED (OFFER) YOUR POSTED WANT
2. PAYMENT_REQUEST: A FULFILLER REQUESTS PAYMENT
3. ANNOUNCEMENT: WANT PLATFORM-WIDE ANNOUNCEMENT

*/

const notificationOptions = {
    ACCEPTED_WANT: 'Accepted Want',
    COUNTERED_WANT: 'Countered Want',
    PAYMENT_REQUEST: 'Payment Request',
    ANNOUNCEMENT: 'Announcement'
}

const { ACCEPTED_WANT, COUNTERED_WANT, PAYMENT_REQUEST, ANNOUNCEMENT } = notificationOptions;

// NOTIFICATION LIST BELOW IS BASED ON THE ABOVE NOTIFICATION TYPES
const notifications = {
    notifications: [{
        photo: 'https://images.unsplash.com/photo-1480406537807-00c0914e8d40?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
        firstName: 'Josh',
        type: PAYMENT_REQUEST,
        title: 'Buy a chocolate croissant from SBUX',
        timestamp: moment().subtract(Math.random() * 5, 'seconds'),
        link: '/profile'
    }, {
        photo: 'https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=987&q=80',
        firstName: 'Daniel',
        type: PAYMENT_REQUEST,
        title: 'Get me into a frat party for Slope Day',
        timestamp: moment().subtract(Math.random() * 20, 'seconds'),
        link: '/profile'
    }, {
        photo: 'https://images.unsplash.com/photo-1517613014533-70f3817be7e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80',
        firstName: 'Julia',
        type: COUNTERED_WANT,
        title: 'Deliver goods to North Campus',
        timestamp: moment().subtract(Math.random() * 80, 'seconds'),
        link: '/profile'
    }, {
        photo: 'https://images.unsplash.com/photo-1535965128466-31ce8adc78ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        firstName: 'Jessia',
        type: ACCEPTED_WANT,
        title: 'Want a hardworking partner for communications project',
        timestamp: moment().subtract(Math.random() * 320, 'seconds'),
        link: '/profile'
    }, {
        photo: 'https://images.unsplash.com/photo-1520107128464-da450679f704?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
        firstName: 'Alex',
        type: ACCEPTED_WANT,
        title: 'Let me borrow a calculator for an exam on Friday',
        timestamp: moment().subtract(Math.random() * 1280, 'seconds'),
        link: '/profile'
    }, {
        photo: 'https://images.unsplash.com/photo-1529008475023-5d5271a6fe50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        firstName: 'Kristina',
        type: ACCEPTED_WANT,
        title: 'Let me borrow a calculator for an exam on Friday',
        timestamp: moment().subtract(Math.random() * 5120, 'seconds'),
        link: '/profile'
    }]
}

export default (state = notifications, action) => {
    switch (action.type) {
        default:
            return state;
    }
}