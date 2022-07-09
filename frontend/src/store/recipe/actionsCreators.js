import { GET_MY_RECIPE } from './actionsTypes'

export function getRecipe() {
  return async (dispatch) => {
    const data = await fetch ('/recipe', {
      method: 'GET'
    })
    const resData = await data.json();
    dispatch(getMyRecipes(resData));
  }
}

export function getMyRecipes(recipes) {
  return { type: GET_MY_RECIPE, payload: recipes }
}
