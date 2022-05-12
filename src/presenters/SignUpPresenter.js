import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import {auth} from '../firebase'
import SignUpView from '../views/SignUpView'

function SignUpPresenter() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const navigate= useNavigate()

  const signUp = (e) => {
    e.preventDefault();
    auth.creatUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
    .then(user =>{{
      navigate("/home")
  }})
    .catch(err=>{console.lof(err)})
  }

  return (
    <div>
      <SignUpView
      emailRef={emailRef}
      passwordRef={passwordRef}
      signUp={signUp}
      />
      
    </div>
  )
}

export default SignUpPresenter