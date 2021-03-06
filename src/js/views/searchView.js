import { elements } from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
    elements.searchInput.value = '';
}

export const clearResults = () => {
    elements.searchResultList.innerHTML = '';
}

const renderRecipe = recipe => {
    const markup = `<li>
            <a class="results__link media" href="#${recipe.recipe_id}">
                <figure class="results__fig media-left">
                    <img src="${recipe.image_url}" alt="${recipe.title}">
                </figure>
                <div class="results__data media-content">
                    <h4 class="results__name">${recipe.title}</h4>
                    <p class="results__author">${recipe.publisher}</p>
                </div>
            </a>
        </li>`;
    elements.searchResultList.insertAdjacentHTML('beforeend', markup);
}

export const renderResults = recipes => {
    recipes.forEach(renderRecipe);
}