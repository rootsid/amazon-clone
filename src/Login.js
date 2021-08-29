import { Link, useHistory } from 'react-router-dom'
import React from 'react'
import './Login.css'
import { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './Firebase'

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((auth) => {
            if (auth) {
                history.push('/')
            }
        })
        .catch((error) => console.log(error.message))
    }

    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((auth) => {
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="login">
            <Link to='/'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" className="login__logo" alt="" />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button className="login__signInButton" type="submit" onClick={signIn} >Sign In</button>
                </form>
                <p>
                By continuing, you agree to Amazon's FAKE CLONE Conditions of Use and Privacy Notice. This is just a clone of AMAZON.
                </p>
                <button className="login__registerButton" type="submit" onClick={register}>
                    Create your amazon account.
                </button>
            </div>
        </div>
    )
}

export default Login
