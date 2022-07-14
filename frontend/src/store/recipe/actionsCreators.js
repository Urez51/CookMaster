import { 
  ERROR_MASSAGE_POST_RECIPE,
  ADD_RECIPE,
  DELETE_ERROR_MASSEGE,
  CLEAR_MESSAGE_AFTER_ADDED_RECIPE,
  GET_MY_RECIPES,
  GET_ALL_RECIPES,
  GET_MY_FAVORITE,
  ADD_LIKE,
  DELETE_ONE_RECIPE,
  PUBLISH_ONE_RECIPE,
  ADMIN_PUBLISH_ONE_RECIPE,
  ADMIN_REJECT_ONE_RECIPE,
  GET_ADMIN_PUBLISH_RECIPE,
} from './actionsTypes'

export function getRecipe() {
  return async (dispatch) => {
    const data = await fetch ('/recipe', {
      method: 'GET'
    })
    const resData = await data.json();
    dispatch(getMyRecipes(resData));
  }
}


export function addRecipe(recipe,recipeIngridients,stepsForRecipes){

  return async (dispatch) => {
    const data = await fetch('/recipe/new', {
    method: 'POST',
    body: JSON.stringify({ recipe, recipeIngridients, stepsForRecipes }),
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
export function clearMessageAfterAddedRecipe(){
  return {type:CLEAR_MESSAGE_AFTER_ADDED_RECIPE}
}
export function getMyRecipes(recipes) {
  return { type: GET_MY_RECIPES, payload: recipes }
}
export function getAllRecipes(recipes) {
  return { type: GET_ALL_RECIPES, payload: recipes }
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
    dispatch(deleteOneRecipeOnstate(id))
  }
}

export function deleteOneRecipeOnstate(id) {
  return {type : DELETE_ONE_RECIPE, payload: id}
}

export function publishRecipe(id) {
  return async (dispatch) => {
    const data = await fetch (`/publish/moder/${id}`, {
      method: 'POST'
    })
    const resData = await data.json()
    console.log(resData)
    dispatch(publishOneRecipe(id))
  }
}
export function publishOneRecipe(id) {
  return { type: PUBLISH_ONE_RECIPE, payload: id }
}
export function getPublishRecipe() {
  return async (dispatch) => {
    const data = await fetch('/publish', {
      method: 'GET',
    })
    const resData = await data.json()
    dispatch(getAdminPublishRecipe(resData))
  }
}

export function getAdminPublishRecipe(id) {
  return { type: GET_ADMIN_PUBLISH_RECIPE, payload: id }
}

export function adminPublishRecipe(id) {
  return async (dispatch) => {
    const data = await fetch(`/publish/private/${id}`, {
      method: 'POST',
    })
    const resData = await data.json()
    dispatch(adminPublishOneRecipe(id))
  }
}

export function adminPublishOneRecipe(id) {
  return { type: ADMIN_PUBLISH_ONE_RECIPE, payload: id }
}

export function adminRejectRecipe(id) {
  return async (dispatch) => {
    const data = await fetch(`/publish/${id}`, {
      method: 'DELETE',
    })
    const resData = await data.json()
    dispatch(adminRejectOneRecipe(id))
  }
}

export function adminRejectOneRecipe(id) {
  return { type: ADMIN_REJECT_ONE_RECIPE, payload: id }
}

export function getFavorite() {
  return async (dispatch) => {
    const data = await fetch('/favorite', {
      method: "GET",
    });
    const resData = await data.json();
    dispatch(getMyFavorite(resData))
  }
}
export function getAllRecipe() {
  return async (dispatch) => {
    const data = await fetch ('/recipe/all', {
      method: 'GET'
    })
    const resData = await data.json();
    dispatch(getAllRecipes(resData));
  }
}


export function getMyFavorite(recipes) {
  return { type: GET_MY_FAVORITE, payload: recipes }
}


export function addToFavoriteRecipe(id) {
  return async (dispatch) => {
    const data = await fetch(`/favorite/${id}`, {
      method: 'POST',
    })
    const resData = await data.text()
    dispatch(editStateForFavorite(id))
  }
}
export function editStateForFavorite(id){
  return {type: ADD_LIKE , payload : id}
}
