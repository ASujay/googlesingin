import React from 'react'
import {GoogleLogout} from 'react-google-login'
import {store} from '../../store'
import { signOut } from '../actions/authAction'

const clientId = "91786239366-efhiee21illlr1gnj9sn8cf9488d583v.apps.googleusercontent.com"

function Logout(){
    const onSuccess = (res) => {
        signOutdispatch()
    }

    const signOutdispatch = () => {
        store.dispatch(signOut())
    }

    return(
        <div>
        <GoogleLogout 
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
        />
        </div>
    )
}

export default Logout