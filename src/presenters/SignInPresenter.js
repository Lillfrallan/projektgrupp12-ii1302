import React, { useState } from 'react'
import SignInPageView from '../views/SignInPageView'
import { auth, signInWithEmailAndPassword } from '../services/api_client_Firebase'
import { useNavigate } from 'react-router-dom';

function SignInPresenter( {setIsLoggedIn} ) {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const navigate = useNavigate();
    
    /**
     * Signs in a user via firebase
     */
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
        setIsLoggedIn(true)
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