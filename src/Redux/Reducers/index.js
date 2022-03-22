import { combineReducers } from "redux";
import reducer from "./reducer";

const redu = combineReducers({
    myreducer: reducer,
})

export default redu;