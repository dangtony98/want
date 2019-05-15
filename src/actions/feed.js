import { UPDATE_FEED, ADD_WANTS, SET_NEXT_PAGE_URL, SET_HAS_MORE_WANTS } from './constants';

const updateFeed = (feed) => ({
    type: UPDATE_FEED,
    feed
});

const addWants = (wants) => ({
    type: ADD_WANTS,
    wants
});

const setNextPageUrl = (url) => ({
    type: SET_NEXT_PAGE_URL,
    url
});

const setHasMoreWants = () => ({
    type: SET_HAS_MORE_WANTS,
    status
});

export { updateFeed, addWants, setNextPageUrl, setHasMoreWants };