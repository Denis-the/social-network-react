import { getAuthUserData } from "./authReducer";

const INITIALIZE_SUCCESS = 'INITIALIZE-SUCCESS';

const initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_SUCCESS: {
            return {
                ...state,
                initialized:true,
            }
        }


    }
    return state;
}

// ACs
export const initilizeSuccess = () => ({type: INITIALIZE_SUCCESS})


// thunks
export const initilizeApp = () => {
    return (dispatch, getState) => {
        const authData = dispatch(getAuthUserData()).then(
            () => dispatch(initilizeSuccess())
        )
        

    }

}



export default appReducer;


