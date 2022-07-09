import { AUTH_LOGIN, AUTH_LOGOUT } from "./actionsTypes";

const initialState = {
  User: {

  }
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_LOGIN: {
      return { ...state, User: action.payload}
    }
    case AUTH_LOGOUT: {
      return { ...state, User: {} }
    }
    
    default: return state;
  }
}
