import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import tasksReducer from './tasks/reducer';
import recipeReducer from './recipe/reducer';
import searchReducer from './searchRecipe/reducer'

import ingridientsAndStepsReduser from './ingridients and stap/reducer'

import commentReducer from './comment/reducer';


export default combineReducers({
  auth: authReducer,
  tasks: tasksReducer,
  recipes: recipeReducer,
  ingridientsAndSteps: ingridientsAndStepsReduser,
  comments: commentReducer,
  searchRecipe: searchReducer,
});
