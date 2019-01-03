import { SET_USER, SET_PHOTO } from './constants';

const setUser = (user) => ({
    type: SET_USER,
    user
});

const setPhoto = (photo) => ({
    type: SET_PHOTO,
    photo
});

export { setUser, setPhoto };