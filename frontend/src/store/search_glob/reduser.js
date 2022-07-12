import {
  GET_ALL_RECIPES,
} from './actionsTypes'


const initialState = {
  recipes: [],
  newRecipeMessage: undefined, 
  errorMassage: undefined,
  publicRecipe: [],
};

export default function recipeSearchReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_RECIPES: {
      return { ...state, recipes: action.payload}
    }
    default: return state;
  }
  
}
