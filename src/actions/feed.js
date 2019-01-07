import { UPDATE_FEED, SET_NEXT_PAGE_URL, SET_HAS_MORE_WANTS } from './constants';

const updateFeed = (feed) => ({
    type: UPDATE_FEED,
    feed
});

const setNextPageUrl = (url) => ({
    type: SET_NEXT_PAGE_URL,
    url
});

const setHasMoreWants = () => ({
    type: SET_HAS_MORE_WANTS,
    status
});

export { updateFeed, setNextPageUrl, setHasMoreWants };