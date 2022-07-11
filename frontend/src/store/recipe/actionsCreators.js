import { GET_MY_RECIPES } from './actionsTypes'
import { ERROR_MASSAGE_POST_RECIPE,ADD_RECIPE,DELETE_ERROR_MASSEGE } from './actionsTypes'


export function getRecipe() {
  return async (dispatch) => {
    const data = await fetch ('/recipe', {
      method: 'GET'
    })
    const resData = await data.json();
    dispatch(getMyRecipes(resData));
  }
}

export function addRecipe(recipe){
  return async (dispatch) => {
    const data = await fetch('/recipe/new', {
    method: 'POST',
    body: JSON.stringify({ recipe }),
    headers: {
      'Content-Type': 'application/json',
    }})
    const newData = await data.json()
    if(newData.errorMessage){
      dispatch(errorMessagePostRecipe(newData.errorMessage))
    }else{
      dispatch(addRecipeInState(newData.message))
    }
     
    return
}
}
export function deleteErrorMassage(){
  return {type:DELETE_ERROR_MASSEGE}
}
export function errorMessagePostRecipe(errorMessage){
  return {type:ERROR_MASSAGE_POST_RECIPE, payload : errorMessage }
}

export function getMyRecipes(recipes) {
  return { type: GET_MY_RECIPES, payload: recipes }
}
export function addRecipeInState(messangeComplite){
  return { type: ADD_RECIPE, payload: messangeComplite }
}

export function deleteRecipe(id) {
  return async (dispatch) => {
    const data = await fetch (`/recipe/${id}`, {
      method: 'DELETE'
    })
    const resData = await data.json()
    console.log(resData)
    dispatch(getMyRecipes(resData))
  }
}

export function publishRecipe(id) {
  return async (dispatch) => {
    const data = await fetch (`/recipe/${id}`, {
      method: 'POST'
    })
    const resData = await data.json()
    console.log(resData);
    dispatch(getMyRecipes(resData))
  }
}

export function getPublishRecipe() {
  return async (dispatch) => {
    const data = await fetch('/recipe/publish', {
      method: 'GET',
    })
    const resData = await data.json()
    console.log(resData)
    dispatch(getMyRecipes(resData))
  }
}
