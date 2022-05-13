import React, { useState } from 'react'
import SignInPageView from '../views/SignInPageView'
import { auth, signInWithEmailAndPassword } from '../services/api_client_Firebase'
import { Navigate, useNavigate } from 'react-router-dom';

function SignInPresenter() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const navigate = useNavigate();
    

    const loginUser = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
        navigate('/home')
        
    };

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