import {
  GET_SEARCH_BY_ING_RECIPES,
} from './actionsTypes'


const initialState = {
  products: [],
};

export default function recipeSearchReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SEARCH_BY_ING_RECIPES: {
      return { ...state, search: action.payload}
    }
    default: return state;
  }
}
