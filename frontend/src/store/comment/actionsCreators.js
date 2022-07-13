import { ADD_COMMENT, GET_COMMENT, DELETE_COMMENT } from "./actionsTypes";

export function addComments(id, body) {
  return async (dispatch) => {
    const data = await fetch("/comment", {
      method: "POST",
      body: JSON.stringify({
        id,
        body,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const resData = await data.json();
    dispatch(addComment(resData));
  }
}

export function getComments(id) {
  return async (dispatch) => {
    const data = await fetch(`/comment/${id}`, {
      method: "GET",
    })
    const resData = await data.json();
    dispatch(getComment(resData));
  }
}

export function deleteComments(id) {
  return async (dispatch) => {
    const data = await fetch(`/comment/${id}`, {
      method: "DELETE",
    })
    const resData = await data.json();
    dispatch(deleteComment(resData));
  }
}

export function addComment(resData) {
  return { type: ADD_COMMENT, payload: resData };
}

export function getComment(allCommentsRecipe) {
  return { type: GET_COMMENT, payload: allCommentsRecipe };
}

export function deleteComment(deleteOneComment) {
  return { type: DELETE_COMMENT, payload: deleteOneComment };
}



