import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunkMiddleware from 'redux-thunk';
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
        applyMiddleware(thunkMiddleware)
));
// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;