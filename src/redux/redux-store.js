import { applyMiddleware, combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sideBarReducer";
import usersReducer from "./usersReducer";
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';
 
let reducers = combineReducers({
    profileData: profileReducer,
    dialogsData: dialogsReducer,
    sideBarData: sideBarReducer,
    usersReducer: usersReducer,
    auth: authReducer,

})


let store = createStore(reducers, applyMiddleware(thunkMiddleware));




window.store = store;
export default store;