import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signup, login, logout,  } from "../services/api_client_Firebase";
import SignUpView from '../views/SignUpView'

function SignupPresenter() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const [ loading, setLoading ] = useState(false);
 // const currentUser = useAuth();
  
  const navigate= useNavigate()
  const [user, setUser] = useState();

  async function handleSignup() {
    setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/signin")
     } catch(error) {
       console.error(error.message);
     }
     setLoading(false);
    
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