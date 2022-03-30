import React from 'react'
import {GoogleLogin} from 'react-google-login'
import {signIn} from '../actions/authAction'
import {store} from '../../store'

const clientId = "91786239366-efhiee21illlr1gnj9sn8cf9488d583v.apps.googleusercontent.com"

function Login(){

    const onSuccess = (res) => {
        signInDispatch()
        //send the profile object and token_id to the backend server for verification
    }

    const onFailure = (res) => {
        console.log(res)
    }

    const signInDispatch = () => {
        store.dispatch(signIn())
    }

    return (
        <div>
        <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
        />
        </div>
    )
}

export default Login