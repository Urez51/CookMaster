import {
  GET_ALL_INGRIDIENTS,
  ADD_ONE_INGRIDIENT,
  DELETE_ONE_INGRIDIENT,
  ADD_ONE_STEP,
  DELETE_ONE_STEP,
  ADD_PHOTO_STEP,
  ADD_INGRIDIENT_FOR_SEARCH,
  DELETE_INGRIENT_FOR_SEARCH,
  DELETE_ONE_INGREDIETN_FOR_SEARCH_IN_STATE,
  ADD_RECIPE_SEARCH_INGRIDIENT
} from './ActionsTypes.js'




export function getAllIngridients(){
  return async (dispatch) => {
    const data = await fetch ('/ingridients', {
      method: 'GET'
    })
    const resData = await data.json()
    dispatch(getAllIngridientsOnState(resData))
  }
}
export  function addPhotoStep(file){
  return async (dispatch) =>{
      const data = await fetch('/photo', {
    method: 'POST',
    body: file
    })
    const nameData = await data.json()
    console.log(nameData)
    dispatch({type:ADD_PHOTO_STEP, payload: nameData})
  }
}
export function sendForSearch(ingridientsSearch){
  return async (dispatch) =>{
    const data = await fetch('/search/ingridients', {
  method: 'POST',
  body: JSON.stringify(ingridientsSearch),
  headers: {
    'Content-Type': 'application/json',
  }
  })
  const nameData = await data.json()
   dispatch({type: ADD_RECIPE_SEARCH_INGRIDIENT, payload: nameData})
}}
export function getAllIngridientsOnState(ingridients){
  return {type:GET_ALL_INGRIDIENTS , payload: ingridients.ingridients}
}
export function addOneIngridient(ingridient,amountIngridient){
  return {type:ADD_ONE_INGRIDIENT, payload: {ingridient,amountIngridient}}
}
export function deleteOneIngridient(id){
  return {type: DELETE_ONE_INGRIDIENT, payload: id}
}
export function addOneStepOnState(step){
  return {type: ADD_ONE_STEP, payload: step}
}
export function deleteOneStep(id){
  return {type: DELETE_ONE_STEP, payload: id}
}
export function addOneIngridientForSearch(ing){
  return {type:ADD_INGRIDIENT_FOR_SEARCH, payload: ing}
}
export function deleteIngridientOnstateSearch(id){
  return {type: DELETE_ONE_INGREDIETN_FOR_SEARCH_IN_STATE, payload:id}
}
export function clearIngridientForSearch(){
  return {type: DELETE_INGRIENT_FOR_SEARCH}
}
