import { SET_USER } from './constants';

const setUser = (user) => ({
    type: SET_USER,
    user
});

export { setUser };