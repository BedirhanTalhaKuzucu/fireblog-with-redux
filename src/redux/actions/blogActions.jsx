import {
    SET_DATA_ARRAY, SET_DISPLAY_COMMENT,
    CLEAR_DATA_ARRAY, CLEAER_DISPLAY_COMMENT
} from "../types/blogTypes";

export const setDataArray = (dataArray) => ({
    type: SET_DATA_ARRAY,
    payload: dataArray,
});

export const clearDataArray = () => ({
    type: CLEAR_DATA_ARRAY,
});

export const setDisplayComment = () => ({
    type: SET_DISPLAY_COMMENT
});

export const clearDisplayComment = () => ({
    type: CLEAER_DISPLAY_COMMENT,
});