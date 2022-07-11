import { GET_MY_RECIPES,ADD_RECIPE, ERROR_MASSAGE_POST_RECIPE,DELETE_ERROR_MASSEGE } from './actionsTypes'


const initialState = {
  recipes: [],
  newRecipeMessage:'', 
};

export default function recipeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MY_RECIPES: {
      return { ...state, recipes: action.payload}
    }
    case ERROR_MASSAGE_POST_RECIPE:{
      return { ...state, errorMassage: action.payload}
    }
    case DELETE_ERROR_MASSEGE:{
      return { ...state, errorMassage: undefined}
    }
    case ADD_RECIPE:{
      return { ...state, newRecipeMessage: action.payload}
    }
    default: return state;
  }
  
}
