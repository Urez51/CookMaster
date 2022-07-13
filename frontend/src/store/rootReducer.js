import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import tasksReducer from './tasks/reducer';
import recipeReducer from './recipe/reducer';
import ingridientsAndStepsReduser from './ingridients and stap/reducer'

export default combineReducers({
  auth: authReducer,
  tasks: tasksReducer,
  recipes: recipeReducer,
  ingridientsAndSteps: ingridientsAndStepsReduser,
});
