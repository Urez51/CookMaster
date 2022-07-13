import {
  GET_ALL_INGRIDIENTS,
  ADD_ONE_INGRIDIENT,
  DELETE_ONE_INGRIDIENT,
  ADD_ONE_STEP
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
