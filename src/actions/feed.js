import { UPDATE_FEED } from './constants';

const updateFeed = (feed) => ({
    type: UPDATE_FEED,
    feed
});

export { updateFeed };