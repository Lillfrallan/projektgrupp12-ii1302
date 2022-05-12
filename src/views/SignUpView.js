import React from 'react'

function SignUpView({emailRef, passwordRef,signUp}) {
  return (
    <div className="signin">
        <form action="">
        <h1>Sign Up</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password"/>
        <button onClick={signUp}>Sign Up</button>
        </form>
    </div>
  )
}

export default SignUpView