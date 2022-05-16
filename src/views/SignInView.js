import React from 'react';
import './css/SignIn.css'
import {Link} from 'react-router-dom';

function SignIn({emailRef, passwordRef,signIn}) {
  return (
    <div>
    <div className="signin">
         <form className="signup" onSubmit={signIn}>
                <div className="signUpTitleLocation">
                    <span className="signUpTitle">Sign In</span>
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
                    <button className='signUpButton' type="submit">Sign In</button>
                    <br></br>
                    <br></br>
                </label>    
                    <Link to='/signup' style={{ textDecoration: 'none' }}>
                        <span>Not a member yet? Register now</span>
                    </Link>
                
            </form>
    </div>
    </div>  
  )
}

export default SignIn