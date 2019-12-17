import Search from './models/Search';
//global state of app
const state = {};

const search = new Search('pizza');
//console.log(search);
search.getResults();