import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signup, login, logout } from "../services/api_client_Firebase";
import SignInView from  '../views/SignInView'

function SignInPresenter() {

    const emailRef = useRef()
    const passwordRef = useRef()
    //const currentUser = useAuth();

    const navigate= useNavigate()
    const [user, setUser] = useState();
    

    async function handleLogin() {
        
        try {
          await login(emailRef.current.value, passwordRef.current.value);
               navigate('/home');  
        } catch (error){
          console.log(error.message);
        }
      }
    


  return (
    <div>
        <SignInView
        emailRef={emailRef}
        passwordRef={passwordRef}
        signIn={handleLogin}
        />

    </div>
  )
}

export default SignInPresenter