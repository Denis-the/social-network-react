import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import usersReducer from "./ducks/users";
import authReducer from "./ducks/auth";
import profileReducer from "./ducks/profile";
import appReducer from "./ducks/app";
import notificationsReducer from "./ducks/notifications";
 
const reducers = combineReducers({
    profileData: profileReducer,
    usersData: usersReducer,
    authData: authReducer,
    appData: appReducer,
    notificationsData: notificationsReducer
})

const store = createStore(reducers, composeWithDevTools(
        applyMiddleware(thunkMiddleware)
));

export default store;