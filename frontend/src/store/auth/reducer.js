import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_EDIT, AUTH_REGISTRATION,UPLOAD_PHOTHO } from "./actionsTypes";

const initialState = {
  User: {

  },
  photo:""
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_LOGIN: {
      return { ...state, User: action.payload}
    }
    case AUTH_REGISTRATION: {
      return { ...state, User: action.payload}
    }
    case AUTH_LOGOUT: {
      return { ...state, User: {} }
    }
    case AUTH_EDIT: {
      return { ...state, User: action.payload}
    }
    case UPLOAD_PHOTHO:{
      return {...state, photo: action.payload}
    }
    default: return state;
  }
}
