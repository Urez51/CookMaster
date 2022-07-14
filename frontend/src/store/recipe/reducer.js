import {
  GET_MY_RECIPES,
  GET_ALL_RECIPES,
  ADD_RECIPE,
  ERROR_MASSAGE_POST_RECIPE,
  DELETE_ERROR_MASSEGE,
  CLEAR_MESSAGE_AFTER_ADDED_RECIPE,
  ADMIN_PUBLICK_RECIPE,
  GET_MY_FAVORITE,
  ADD_LIKE,
  DELETE_ONE_RECIPE,
  PUBLISH_ONE_RECIPE,
  ADMIN_PUBLISH_ONE_RECIPE,
  ADMIN_REJECT_ONE_RECIPE,
  GET_ADMIN_PUBLISH_RECIPE,
  DELETE_ONE_FAVORITE_STATE
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
      
      const recipe = state.recipes.map((el)=> 
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
      return {...state, recipes: recipe }
    }
    case DELETE_ONE_RECIPE: {
      const id = Number(action.payload)
      const arr = state.recipes.filter((el) => el.id !== id)
      return {...state, recipes: arr }
    }
    case PUBLISH_ONE_RECIPE:{
      const id = Number(action.payload)
      const arr = state.recipes.map((el) => {
        if(el.id === id){
          el.moder_visible = true
          return el
        }else{
          return el
        }
      })
      return {...state, recipes: arr }
    }
    case ADMIN_PUBLISH_ONE_RECIPE: {
      const id = Number(action.payload)
      const arr = state.recipes.map((el) => {
        if (el.id === id) {
          el.moder_visible = false
          el.private = false
          return el
        } else {
          return el
        }
      })
      return {...state, recipes: arr}
    }
    case ADMIN_REJECT_ONE_RECIPE: {
      const id = Number(action.payload)
      const arr = state.recipes.filter((el) => el.id !== id)
      return {...state, recipes: arr }
    }
    case GET_ADMIN_PUBLISH_RECIPE: {
      return { ...state, publicRecipe: action.payload}
    }
    case DELETE_ONE_FAVORITE_STATE:{
      const id = Number(action.payload)
      const arr = state.favoriteRecipes.filter((el) => el['Recipe.id'] !== id)
      return {...state , favoriteRecipes: arr }
    }

    default: return state;
  }
  
}
