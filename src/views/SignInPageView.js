import React from 'react'
import './css/SignIn.css'

function SignInPageView( {setLoginPassword, setLoginEmail, loginUser} ) {
        
    return (
        <div className="signInContainer">
            <div className="signInLoayout">
                <h3>Sign in</h3>
                <input placeholder="Enter an email" onChange={(event) => {setLoginEmail(event.target.value)}}/>
                <input placeholder="Enter a password" onChange={(event) => {setLoginPassword(event.target.value)}}/>
                <button onClick={loginUser} title="login">Log in</button>
            </div>
            
        </div>
    )
}

export default SignInPageView