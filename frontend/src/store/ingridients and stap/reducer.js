import {
  GET_ALL_INGRIDIENTS,
  ADD_ONE_INGRIDIENT,
  DELETE_ONE_INGRIDIENT,
  ADD_ONE_STEP,
  DELETE_ONE_STEP
} from './ActionsTypes'
import {CLEAR_STATE_AFTER_COMPLITE_RECIPE} from '../recipe/actionsTypes'
const initialState = {
  allIngridients:[],
  recipeIngridients:[],
  stepsForRecipes: [],
}

export default function ingridientsAndStepsReduser(state = initialState, action ){
  switch (action.type){
    case GET_ALL_INGRIDIENTS: {
      return {...state, allIngridients: action.payload}
    }
    case ADD_ONE_INGRIDIENT:{
      const {ingridient,amountIngridient}=action.payload
      return {...state, recipeIngridients: [...state.recipeIngridients,{id:ingridient.id,name:ingridient.name,measure:ingridient.measure,amount:amountIngridient}]}
    }
    case DELETE_ONE_INGRIDIENT :{
      const id = Number(action.payload)
      const arr = state.recipeIngridients.filter((el)=> el.id !== id)
      return {...state, recipeIngridients: arr }
    }
    case ADD_ONE_STEP: {
      return {...state, stepsForRecipes: [...state.stepsForRecipes, action.payload]}
    }
    case DELETE_ONE_STEP:{
      const id = Number(action.payload)
      const arr = state.stepsForRecipes.filter((el)=> el.numStep !== id)
      console.log(id);
      console.log(arr);
      
      return {...state, stepsForRecipes: arr }
    }
    case CLEAR_STATE_AFTER_COMPLITE_RECIPE:{
      return{...state, stepsForRecipes:[],recipeIngridients:[]}
    }
    default: return state;
  }
}
