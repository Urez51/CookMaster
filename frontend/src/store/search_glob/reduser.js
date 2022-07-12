import {
  GET_SEARCH_RECIPES,
} from './actionsTypes'


const initialState = {
  search: [],
};

export default function recipeSearchReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SEARCH_RECIPES: {
      return { ...state, search: action.payload}
    }
    default: return state;
  }
}
