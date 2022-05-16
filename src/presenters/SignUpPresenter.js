import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {createUserWithEmailAndPassword, auth, onAuthStateChanged} from '../services/api_client_Firebase'
import SignUpView from '../views/SignUpView'

function SignupPresenter() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const [ loading, setLoading ] = useState(false);
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
 // const currentUser = useAuth();
  
  const navigate= useNavigate()

  
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
      <SignUpView
      emailRef={emailRef}
      passwordRef={passwordRef}
      signUp={handleSignup}
      />
      
    </div>
  )
}

export default SignupPresenter