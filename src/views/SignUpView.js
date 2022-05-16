import React from 'react'

function SignUp({emailRef, passwordRef,signUp}) {
  return (
    <div>
    <div className="signin">
        
         <form className="signup" onSubmit={signUp}>
                <div className="signUpTitleLocation">
                    <span className="signUpTitle">Sign Up</span>
                    <br></br>
                    <br></br>
                </div>
                <label >
                    <input  className="email"
                    ref={emailRef} type={"text"}
                    placeholder='Email'/>
                </label>
                <br></br>
                <label >
                    <input className="password
                     "ref={passwordRef} type={"password"}
                    placeholder='Password' />
                </label>
                <br></br>
                <label>
                    <button className='signUpButton' type="submit">Sign Up</button>
                    
                </label>
            </form>
    </div>
    </div>  
  )
}

export default SignUp

