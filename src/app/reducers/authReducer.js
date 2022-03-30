import authActionTypes from "../actionTypes/authActionTypes"

const initialState = {
    signedIn: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case authActionTypes.SIGN_IN:{
            return {
                ...state,
                signedIn: true
            }
        }
        break;
        case authActionTypes.SIGN_OUT:{
            return {
                ...state,
                signedIn: false
            }
        }
        break;
        default:
            return {
            ...state
        }
    }
}

export default authReducer