import { GET_MY_RECIPE } from './actionsTypes'

const initialState = {
  recipes: []
};

export default function recipeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MY_RECIPE: {
      return { ...state, recipes: action.payload}
    }
    default: return state;
  }
}
