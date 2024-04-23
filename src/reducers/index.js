import { combineReducers } from "redux";
import counterReducer from "./counter";
import isLogginReducer from "./isLoggin";

const allReducers = combineReducers({
    counter: counterReducer,
    isLogin:isLogginReducer
})

export default allReducers;