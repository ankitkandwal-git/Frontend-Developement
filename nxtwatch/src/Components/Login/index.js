import React from 'react'
import Cookies from 'js-cookie'
import { useState } from 'react'
import './index.css'

const Login = () =>{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const onChangeUsername = event =>{
        setUsername(event.target.value)
    }
    const onChangePassword = event =>{
        setPassword(event.target.value)
    }

    return(
        <div className='login-container'>
            <div className="login-card">
                <form className="login-form">
                    <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" 
                    alt="website logo" className="login-logo"/>
                    <label htmlFor="username" className="input-label" onChange={onChangeUsername}>USERNAME</label>
                    <input type="text" id="username" className="input-field" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <label htmlFor="password" className="input-label" onChange={onChangePassword}>PASSWORD</label>
                    <input type="password" id="password" className="input-field" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </form>
                <button type="submit" className="login-button">Login</button>
            </div>
        </div>
    )
}

export default Login