import React from 'react'
import {Link} from 'react-router-dom'

function SignUpPageView( {setRegisterPassword , setRegisterEmail, registerUser }) {
    
    return (
        <div className="signInContainer">
            <div className="signInLoayout">
                <h3>Sign Up</h3>
                <input placeholder="Enter an email" className ="email" onChange={(event) => {setRegisterEmail(event.target.value)}}/>
                <br></br>
                <input className ="password" placeholder="Enter a password" onChange={(event) => {setRegisterPassword(event.target.value)}}/>
                <br></br>
                <button className='signUpButton'  onClick={registerUser} >Log in</button>
                <br></br>
                <Link to='/signInUser' className='link'>
                    <span>Already Registered? Log in here</span>
                </Link>
            </div>
            
        </div>
    )
}

export default SignUpPageView