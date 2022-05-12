import React, {useRef} from 'react'
import Signup from "../presenters/SignUpPresenter"
import Signin from "../presenters/SignInPresenter"
import './css/SignIn.css'

function SignIn(emailRef, passwordRef, signIn) {
  return (
    <div className="signin">
        <form action="">
        <h1>Sign in</h1>
        <input ref={emailRef} type="email"/>
        <input ref={passwordRef} type="password"/>
        <button onClick={signIn}>Sign in</button>
        </form>
    </div>
  )
}

export default SignIn