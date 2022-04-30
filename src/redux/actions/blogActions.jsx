import {
    SET_BLOG_DATAS, SET_DATA_ARRAY, SET_DISPLAY_COMMENT,
    CLEAR_BLOG_DATAS, CLEAR_DATA_ARRAY, CLEAER_DISPLAY_COMMENT
} from "../types/blogTypes";

export const setBlogData = (data) => ({
    type: SET_BLOG_DATAS,
    payload: data,
});

export const clearBlogData = () => ({
    type: CLEAR_BLOG_DATAS,
});

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