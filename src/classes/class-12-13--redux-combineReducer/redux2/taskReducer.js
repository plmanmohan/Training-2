import { ADD_TASK, TOGGLE_TASK } from "./actions";

const taskReducer = (state = [], action) => {
  const newStore = [...state];
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case TOGGLE_TASK:
      return newStore.map((item) => {
        item.complete =
          item.id === action.payload ? !item.complete : item.complete;
        return item;
      });
    default:
      return state;
  }
};
export default taskReducer;
