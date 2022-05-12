import React, { useState } from 'react'
import SignUpPageView from '../views/SignUpPageView'
import {createUserWithEmailAndPassword, auth} from '../services/api_client_Firebase'

function SignInPresenter() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const registerUser = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth, 
                registerEmail, 
                registerPassword
            )
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