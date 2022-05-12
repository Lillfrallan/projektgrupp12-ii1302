import React, { useState } from 'react'
import SignInPageView from '../views/SignInPageView'
import { auth, signOut, signInWithEmailAndPassword } from '../services/api_client_Firebase'

function SignInPresenter() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const loginUser = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth, 
                loginEmail, 
                loginPassword
            )
        }
        catch(error) {
            console.log(error.message);
        }
    }

    return (
        <div>
            <SignInPageView
                setLoginEmail={setLoginEmail}
                setLoginPassword={setLoginPassword}
                loginUser={loginUser}
            />

        </div>
    )
}

export default SignInPresenter