import {
  GET_MY_RECIPES,
  GET_ALL_RECIPES,
  ADD_RECIPE,
  ERROR_MASSAGE_POST_RECIPE,
  DELETE_ERROR_MASSEGE,
  CLEAR_MESSAGE_AFTER_ADDED_RECIPE,
  ADMIN_PUBLICK_RECIPE,
  GET_MY_FAVORITE,
  ADD_LIKE
} from './actionsTypes'


const initialState = {
  recipes: [],
  newRecipeMessage: undefined, 
  errorMassage: undefined,
  publicRecipe: [],
  favoriteRecipes: []
};

export default function recipeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MY_RECIPES: {
      return { ...state, recipes: action.payload}
    }
    case GET_ALL_RECIPES: {
      return { ...state, recipes: action.payload}
    }
    case ERROR_MASSAGE_POST_RECIPE:{
      return { ...state, errorMassage: action.payload}
    }
    case DELETE_ERROR_MASSEGE:{
      return { ...state, errorMassage: undefined}
    }
    case ADD_RECIPE:{
      return { ...state, newRecipeMessage: action.payload}
    }
    case CLEAR_MESSAGE_AFTER_ADDED_RECIPE :{
      return {...state, newRecipeMessage: undefined}
    }
    case ADMIN_PUBLICK_RECIPE: {
      return {...state, publicRecipe: [...state.publicRecipe, action.payload] }
    }
    case GET_MY_FAVORITE: {
      return {...state, favoriteRecipes: action.payload }
    }
    case ADD_LIKE :{
      
      const kek = state.recipes.map((el)=> 
       { if(el.id===Number(action.payload)){
        if(el['Favorite_recipes.recipe_id'] === null){
            el['Favorite_recipes.recipe_id'] = 1
            return el
          }else{
              el['Favorite_recipes.recipe_id'] = null
              return el
            }
        }else{
          return el
        }}
      )
      return {...state, recipes: kek }
    }

    default: return state;
  }
  
}
