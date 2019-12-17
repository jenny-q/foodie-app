import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements } from './views/base';
//global state of app
const state = {};

const controlSearch = async () => {
    //get query
    const query = searchView.getInput();

    if (query) {
        //add to state
        state.search = new Search(query);

        searchView.clearInput();

        searchView.clearResults();

        //search for recipes
        await state.search.getResults();

        //test
        console.log(state.search.result);

        //render
        searchView.renderResults(state.search.result);
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

