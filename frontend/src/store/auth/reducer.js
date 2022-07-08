import { AUTH_LOGIN } from "./actionsTypes";

const initialState = {
  User: {

  }
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_LOGIN: {
      return { ...state, User: action.payload}
    }
    
    default: return state;
  }
}
