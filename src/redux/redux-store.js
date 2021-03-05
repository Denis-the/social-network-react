import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sideBarReducer";

let reducers = combineReducers({
    profileData: profileReducer,
    dialogsData: dialogsReducer,
    sideBarData: sideBarReducer,
})


let store = createStore(reducers);





export default store