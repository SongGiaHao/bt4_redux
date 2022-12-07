import { createStore } from "redux";
import myReduces from "../reducers";

const store = createStore(myReduces);


export default store;