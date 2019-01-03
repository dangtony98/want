import { UPDATE_SEARCH_TERM } from './constants';

const updateSearchTerm = (searchTerm) => ({
    type: UPDATE_SEARCH_TERM,
    searchTerm
});

export { updateSearchTerm };