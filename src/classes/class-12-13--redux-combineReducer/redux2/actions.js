export const ADD_TASK = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const CLEAR_TASKS = "CLEAR_TASKS";
export const SET_FILTER = "SET_FILTER";
export const TOGGLE_TASK = "TOGGLE_TASK";

export const setFilter = (filter) => ({
    type: SET_FILTER,
    payload: filter
})
export const toggleCompletion = (id) => ({
    type: TOGGLE_TASK,
    payload: id
})