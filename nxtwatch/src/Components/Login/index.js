import React from 'react'
import Cookies from 'js-cookie'
import { useState,UseNavigate } from 'react'
import './index.css'

const Login = () =>{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const [showSubmitError, setShowSubmitError] = useState(false)
    const Navigate = UseNavigate()
    const onChangeUsername = event =>{
        setUsername(event.target.value)
    }
    const onSubmitFailure = errorMsg =>{
        setErrorMsg(errorMsg)
        setShowSubmitError(true)
    }
    const onSubmitSuccess = jwtToken =>{
        Cookies.set('jwt_token',jwtToken,{expires:30})
        Navigate ('/',{replace:true})
    }
    const onChangePassword = event =>{
        setPassword(event.target.value)
    }
    const jwtToken = Cookies.get('jwt_token')
    if(jwtToken !== undefined){
        return <Navigate to="/" replace/>
    }
    const onSubmitForm = async event =>{
        event.preventDefault();
        const userDetails ={username,password};
        const url = 'https://apis.ccbp.in/login'
        const options ={
            method: 'POST',
            body : JSON.stringify(userDetails)
        }
        const response = await fetch(url,options);
        const data = await response.json();
        if(response.ok===true){
            onSubmitSuccess(data.jwt_token)
        }
        else{
            onSubmitFailure(data.error_msg)
        }
    }
    return(
        <div className='login-container'>
            <div className="login-card">
                <form className="login-form" onSubmit={onSubmitForm}>
                    <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" 
                    alt="website logo" className="login-logo"/>
                    <label htmlFor="username" className="input-label" onChange={onChangeUsername}>USERNAME</label>
                    <input type="text" id="username" className="input-field" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <label htmlFor="password" className="input-label" onChange={onChangePassword}>PASSWORD</label>
                    <input type="password" id="password" className="input-field" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </form>
                <button type="submit" className="login-button">Login</button>
                {showSubmitError && <p className="error-msg">{errorMsg}</p>}
            </div>
        </div>
    )
}

export default Login