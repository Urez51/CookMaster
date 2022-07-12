import { 
  GET_SEARCH_RECIPES,
} from './actionsTypes'

export function getAllRecipe() {
  return async (dispatch) => {
    const data = await fetch ('/search', {
      method: 'GET'
    })
    const resData = await data.json();
    dispatch(getAllRecipes(resData));
  }
}


export function getAllRecipes(search) {
  return { type: GET_SEARCH_RECIPES, payload: search }
}
