import { AUTH_LOGOUT } from "./actionsTypes";

export function deleteAuth() {
  return async (dispatch) => {
    const data = await fetch('/logout', {
      method: 'GET'
    });

    const resData = await data;
    dispatch(deleteData());
  }
}

export function deleteData() {
  return { type: AUTH_LOGOUT };
}



