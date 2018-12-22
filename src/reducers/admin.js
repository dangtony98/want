const admin = {
    currentUser: '11aS43eaF3',
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    subtitle: 'Chef, amateur photographer, and cat lover',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
    photo: ''
}

export default (state = admin, action) => {
    switch (action.type) {
        case 'SET_USER':
            console.log('SET_USER TRIGGERED');
            console.log(action.user);
            return {
                ...state,
                photo: `http://94a65306.ngrok.io/api/avatars/${action.user.avatar}`
            };
        default:
            return state;
    }
}