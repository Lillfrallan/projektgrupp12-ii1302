import React from 'react'

function SignUpPageView( {setRegisterPassword , setRegisterEmail, registerUser }) {
    
    return (
        <div>
            <h3>Sign up</h3>
                <input placeholder="Enter an email" onChange={(event) => {setRegisterEmail(event.target.value)}}/>
                <input placeholder="Enter a password" onChange={(event) => {setRegisterPassword(event.target.value)}}/>

                <button onClick={registerUser}>Sign up</button>

        </div>
    )
}

export default SignUpPageView