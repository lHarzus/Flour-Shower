import {
  CHANGE_PATH,
  GET_RECIPES,
  GET_RECIPESCAT,
  GET_CATEGORIES,
} from "../actions/types";

const initialState = {
  path: "",
  recipes: [],
  categories: [],
};

export default function AUTH(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_PATH:
      return {
        ...state,
        path: payload,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    case GET_RECIPES:
    case GET_RECIPESCAT:
      return {
        ...state,
        recipes: payload,
      };
    default:
      return state;
  }
}
