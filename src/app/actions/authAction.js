import authActionTypes from "../actionTypes/authActionTypes"

const signIn = () => {
    return  {
        type: authActionTypes.SIGN_IN
    }
}

const signOut = () => {
    return {
        type: authActionTypes.SIGN_OUT
    }
}

export {signIn, signOut}