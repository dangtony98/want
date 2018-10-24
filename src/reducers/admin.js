const admin = {
    loggedIn: true,
    currentUser: '11aS43eaF3',
    photo: 'https://images.unsplash.com/photo-1535441577682-5a7bc0702a7d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=077e17fb017e1258f3d5d3709729640a&auto=format&fit=crop&w=934&q=80'
}

export default (state = admin, action) => {
    switch (action.type) {
        default:
            return state;
    }
}