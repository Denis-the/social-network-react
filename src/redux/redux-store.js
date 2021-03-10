import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sideBarReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profileData: profileReducer,
    dialogsData: dialogsReducer,
    sideBarData: sideBarReducer,
    usersReducer: usersReducer,
})


let store = createStore(reducers);




window.store = store;
export default store;