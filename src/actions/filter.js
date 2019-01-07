import { UPDATE_SEARCH_TERM, STORE_CATEGORIES } from './constants';

const updateSearchTerm = (searchTerm) => ({
    type: UPDATE_SEARCH_TERM,
    searchTerm
});

const storeCategories = (categories) => ({
    type: STORE_CATEGORIES,
    categories
})

export { updateSearchTerm, storeCategories };