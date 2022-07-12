import { 
  GET_ALL_RECIPES,
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


export function getAllRecipes(recipes) {
  return { type: GET_ALL_RECIPES, payload: recipes }
}
