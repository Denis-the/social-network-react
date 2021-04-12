import { getAuthUserData } from "./authReducer";

const INITIALIZATION_SUCCESS = 'INITIALIZE-SUCCESS';

const initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZATION_SUCCESS: 
            return {...state, initialized: true, }
    }

    return state;
}

// ACs
export const initilizeSuccess = () => ({ type: INITIALIZATION_SUCCESS })


// thunks
export const initilizeApp = () => dispatch => {
    dispatch(getAuthUserData()).then( () => dispatch(initilizeSuccess()))
}

export default appReducer;


