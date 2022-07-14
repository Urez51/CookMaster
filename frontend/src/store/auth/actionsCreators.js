import { AUTH_LOGOUT, AUTH_EDIT,UPLOAD_PHOTHO } from "./actionsTypes";

export function deleteAuth() {
  return async (dispatch) => {
    const data = await fetch('/logout', {
      method: 'GET'
    });

    const resData = await data;
    dispatch(deleteData());
  }
}
export function upLoadPhotoUser(file){
  return async (dispatch) =>{
    const data = await fetch('/photo', {
  method: 'POST',
  body: file
  })
  const nameData = await data.json()
  console.log(nameData)
  dispatch({type:UPLOAD_PHOTHO, payload: nameData})
}
}
export function editAuth(name, surname, img) {
  return async (dispatch) => {
    const data = await fetch("/edit", {
      method: "PUT",
      body: JSON.stringify({
        name,
        surname,
        img,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const resData = await data.json();
    dispatch(editData(resData));
  }
}

// export function editAuth(name, surname, email, password) {
//   return async (dispatch) => {
//     const data = await fetch("/register", {
//       method: "POST",
//       body: JSON.stringify({
//         name,
//         surname,
//         email,
//         password,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       const resData = await data.json()
//       dispatch(registrData(resData));
//   }
// }




export function deleteData() {
  return { type: AUTH_LOGOUT };
}

export function editData(resData) {
  return { type: AUTH_EDIT, payload: resData  };
}

// export function registrData(resData) {
//   return { type: AUTH_REGISTRATION, payload: resData  };
// }


