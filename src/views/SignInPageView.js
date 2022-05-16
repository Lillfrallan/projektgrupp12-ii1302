import React from 'react'
import './css/SignIn.css'
import {Link} from 'react-router-dom'

function SignInPageView( {setLoginPassword, setLoginEmail, loginUser} ) {
        
    return (
        <div className="signInContainer">
            <div className="signInLoayout">
                <h3 className="signintitle" >Sign In</h3>
                <input placeholder="Enter an email" className ="email" onChange={(event) => {setLoginEmail(event.target.value)}}/>
                <br></br>
                <input className ="password" type={'password'} placeholder="Enter a password" onChange={(event) => {setLoginPassword(event.target.value)}}/>
                <br></br>
                <button className='signUpButton'  onClick={loginUser} title="login">Log in</button>
                <br></br>
                <Link to='/signUpUser' className='link'>
                    <span>New user? Register here</span>
                </Link>
            </div>
            
        </div>
    )
}

export default SignInPageView