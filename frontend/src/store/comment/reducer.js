import { ADD_COMMENT, GET_COMMENT, DELETE_COMMENT } from "./actionsTypes";

const initialState = {
  comment: []
};

export default function commentReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COMMENT: {
      return { ...state, comment: [...state.comment, action.payload]}
    }
    case GET_COMMENT: {
      return { ...state, comment: action.payload}
    }
    case DELETE_COMMENT: {
      return { ...state, comment: state.comment.filter((item) => Number(item.id) !== Number(action.payload))}
    }

    
    default: return state;
  }
}
