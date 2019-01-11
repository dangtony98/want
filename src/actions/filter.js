import { UPDATE_SEARCH_TERM, STORE_CATEGORIES, UPDATE_CHOSEN_FILTERS } from './constants';

const updateSearchTerm = (searchTerm) => ({
    type: UPDATE_SEARCH_TERM,
    searchTerm
});

const storeCategories = (categories) => ({
    type: STORE_CATEGORIES,
    categories
});

const updateChosenFilters = (e, name) => ({
    type: UPDATE_CHOSEN_FILTERS,
    e,
    name
});

export { updateSearchTerm, storeCategories, updateChosenFilters };