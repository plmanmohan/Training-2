import { createStore } from "redux";
import counterReducer from './counterReducer';

const dtore = createStore(counterReducer);

export default dtore;