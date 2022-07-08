import { AUTH_LOGIN, AUTH_REGISTR, AUTH_ERROR } from "./actionsTypes";

const initialState = {
  User: {

  },
  Error: {

  }
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_LOGIN: {
      return { ...state, User: action.payload}
    }
    case AUTH_REGISTR: {
      return { ...state, User: action.payload}
    }
    case AUTH_ERROR: {
      return { ...state, Error: action.payload}
    }
    
    default: return state;
  }
}
