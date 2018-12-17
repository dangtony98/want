var moment = require('moment');

const notifications = {
    notifications: [{
        photo: 'https://images.unsplash.com/photo-1480406537807-00c0914e8d40?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
        subject: 'Josh demands your payment',
        date: moment().subtract(Math.random() * 5, 'seconds'),
        link: null
    }, {
        photo: 'https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=987&q=80',
        subject: 'Daniel demands your payment',
        date: moment().subtract(Math.random() * 20, 'seconds'),
        link: null
    }, {
        photo: 'https://images.unsplash.com/photo-1517613014533-70f3817be7e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80',
        subject: 'Julia matched with your Want',
        date: moment().subtract(Math.random() * 80, 'seconds'),
        link: null
    }, {
        photo: 'https://images.unsplash.com/photo-1535965128466-31ce8adc78ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        subject: 'Jessica matched with your Want',
        date: moment().subtract(Math.random() * 320, 'seconds'),
        link: null
    }, {
        photo: 'https://images.unsplash.com/photo-1520107128464-da450679f704?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
        subject: 'Alex matched with your Want',
        date: moment().subtract(Math.random() * 1280, 'seconds'),
        link: null
    }, {
        photo: 'https://images.unsplash.com/photo-1529008475023-5d5271a6fe50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        subject: 'Kristina demands your payment',
        date: moment().subtract(Math.random() * 5120, 'seconds'),
        link: null
    }]
}

export default (state = notifications, action) => {
    switch (action.type) {
        default:
            return state;
    }
}