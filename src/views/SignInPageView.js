import React from 'react'

function SignInPageView( {setLoginPassword, setLoginEmail, loginUser} ) {
        
    return (
        <div>
            <h3>Log in</h3>
                <input placeholder="Enter an email" onChange={(event) => {setLoginEmail(event.target.val)}}/>
                <input placeholder="Enter a password" onChange={(event) => {setLoginPassword(event.target.val)}}/>

                <button onClick={loginUser} title="login">Log in</button>
            
        </div>
    )
}

export default SignInPageView