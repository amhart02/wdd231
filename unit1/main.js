import {getRecipes} from "./recipes.mjs"

const cookieData = getRecipes();

function setCookieInfo(data) {
    console.log(data);
    const container = document.querySelector(".recipes");
    const html = data.map(recipeTemplate);
    container.innerHTML = html.join("");
    }

function recipeTemplate(info) {
    return `<div class="recipe">
    <h2>${info.RECIPE_NAME}</h2>
    <img src="${info.IMAGE}" alt="${info.RECIPE_NAME}"/>
    </div>
    `;
}

function getType(data) {
    const tradContainer = document.querySelector('.traditional');
    const trad = data.find((data) => data.TYPE === 'traditional');
    tradContainer.innerHTML = trad.RECIPE_NAME;
}

setCookieInfo(cookieData);
getType(cookieData);