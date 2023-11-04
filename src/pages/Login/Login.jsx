import React from 'react'

import { Link } from 'react-router-dom'

import './Login.css'

const Login = () => {
  return (
    <div className='login-container'>
      <div className='login-wrapper'>
        <h1 className='login-title'>SIGN IN</h1>
        <form className='login-form'>
          <input placeholder='username' className='login-input'/>
          <input placeholder='password' className='login-input'/>
          <button className='login-button'> LOGIN </button>
          <Link to='/register' style={{textDecoration:'none', color :'teal', fontSize:'14px' , fontWeight:'bold'}}> CREATE A NEW ACCOUNT</Link>
        </form>
      </div>
    </div>
  )
}

export default Login
