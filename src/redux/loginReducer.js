const UPDATE_LOGIN = 'UPDATE-LOGIN';
const UPDATE_PASSWORD = 'UPDATE-PASSWORD';
const UPDATE_REMEMBER = 'UPDATE-REMEMBER';



const initialLoginState = {
    form: {
        remember:false,
        login:null,
        password:null,
    }
}

const loginReducer = (state = initialLoginState, action) => {
    switch(action.type){
        case UPDATE_LOGIN: {

        }
        case UPDATE_PASSWORD:{

        }
        case UPDATE_REMEMBER: {

        }

    }


    return state;
}


//AC
export const updateLogin = (newValue) => ({type:UPDATE_LOGIN, newValue});
export const updatePassword = (newValue) => ({type:UPDATE_PASSWORD, newValue});
export const updateRemember = (newValue) => ({type:UPDATE_REMEMBER, newValue});




export default loginReducer;