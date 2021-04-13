import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sideBarReducer";
import usersReducer from "./usersReducer";
import authReducer from './authReducer';
import appReducer from "./appReducer";
 
let reducers = combineReducers({
    profileData: profileReducer,
    dialogsData: dialogsReducer,
    sideBarData: sideBarReducer,
    usersReducer: usersReducer,
    auth: authReducer,
    app: appReducer,
})


let store = createStore(reducers, applyMiddleware(thunkMiddleware));




window.store = store;
export default store;