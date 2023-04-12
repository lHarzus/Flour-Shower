import {
  CHANGE_PATH,
  GET_CATEGORIES,
  GET_RECIPES,
  GET_RECIPESCAT,
} from "../actions/types";
import { getCategoriesData } from "../recipes/recipesdata";
import { getRecipesData } from "../recipes/recipesdata";
import { getRecipesCatData } from "../recipes/recipesdata";

//Change path
export const changePath = path => async dispatch => {
  dispatch({
    type: CHANGE_PATH,
    payload: path,
  });
};

//Get recipes
export const getRecipes = () => dispatch => {
  const res = getRecipesDate();
  dispatch({
    type: GET_RECIPES,
    payload: res,
  });
};

//Get recipes by category
export const getRecipesCat = cat => dispatch => {
  const res = getRecipesCatDate(cat);
  dispatch({
    type: GET_RECIPESCAT,
    payload: res,
  });
};

//Get Categories
export const getCategories = () => dispatch => {
  const res = getCategoriesDate();
  dispatch({
    type: GET_CATEGORIES,
    payload: res,
  });
};
