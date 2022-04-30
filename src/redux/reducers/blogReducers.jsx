import {
    SET_DATA_ARRAY, SET_DISPLAY_COMMENT,
    CLEAR_DATA_ARRAY, CLEAER_DISPLAY_COMMENT
} from "../types/blogTypes";

const initialState = {
  dataArray: "",
  displayComment: false,
};

const blogReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_DATA_ARRAY:
        return {...state, dataArray:payload};
    case CLEAR_DATA_ARRAY:
        return initialState.dataArray;
    case SET_DISPLAY_COMMENT:
        return {...state, displayComment: !(state.displayComment)}
    case CLEAER_DISPLAY_COMMENT:
        return initialState.displayComment
    default:
      return state;
  }
};

export default blogReducer;