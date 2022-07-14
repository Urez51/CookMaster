import { 
  GET_SEARCH_BY_ING_RECIPES,
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


export function getAllRecipes(products) {
  return { type: GET_SEARCH_BY_ING_RECIPES, payload: products }
}
