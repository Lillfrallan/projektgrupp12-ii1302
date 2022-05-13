import React, { useState } from 'react'
import SignUpPageView from '../views/SignUpPageView'
import {createUserWithEmailAndPassword, auth, onAuthStateChanged} from '../services/api_client_Firebase'
import { useNavigate } from 'react-router-dom';


function SignInPresenter() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const navigate = useNavigate();
    
    const registerUser = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth, 
                registerEmail, 
                registerPassword
            )
            console.log(user);
            navigate('/signIn')
        }
        
        catch(error) {
            console.log(error.message);
        }
        
    }

    return (
        <div>
            <SignUpPageView
                setRegisterEmail={setRegisterEmail}
                setRegisterPassword={setRegisterPassword}
                registerUser={registerUser}
            
            />

        </div>
    )
}

export default SignInPresenter