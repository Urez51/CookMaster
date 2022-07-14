import { SEARCH_RECIPE } from "./actionsTypes";

export function searchRecipe(title) {
  return async (dispatch) => {
    const data = await fetch("/search/name", {
      method: "POST",
      body: JSON.stringify({
        title,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const resData = await data.json();
    dispatch(searchRecipeData(resData));
  }
}

export function searchRecipeData(resData) {
  return { type: SEARCH_RECIPE, payload: resData  };
}
