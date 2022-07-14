import { SEARCH_RECIPE } from "./actionsTypes";

const initialState = {
  searchRecipe: {
    
  }
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_RECIPE: {
      return { ...state, searchRecipe: action.payload}
    }
    
    default: return state;
  }
}
