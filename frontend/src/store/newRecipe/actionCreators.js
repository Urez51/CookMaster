

export function addRecipe(recipe){
  return async (dispatch) => {
    const data = await fetch('/newrecipe', {
    method: 'POST',
    body: JSON.stringify({ recipe }),
    headers: {
      'Content-Type': 'application/json',
    },
    
    dispatch()
})
}}
