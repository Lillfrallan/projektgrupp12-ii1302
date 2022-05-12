import React, { useRef, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {auth, signIn} from '../firebase'
import signInView from  '../views/SignInView'

function SignInPresenter() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate= useNavigate()
    const [user, setUser] = useState();

    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
        .then(() =>{
            navigate("/home")
        }).catch((error) => {
            console.error(error)
        })   
    }

    useEffect(() => {
        const logg= auth.onAuthStateChanged(userAuth =>{
            const user= {
                uid: userAuth.uid,
                email: userAuth.email
            }
            if(userAuth){
                console.lor('userAuth', userAuth)
                setUser(user)
            }
            else{setUser(null)
            }
        })
        return logg
    },[]

    )

  return (
    <div>
        <signInView
        emailRef={emailRef}
        passwordRef={passwordRef}
        signIn={signIn}
        />

    </div>
  )
}

export default SignInPresenter