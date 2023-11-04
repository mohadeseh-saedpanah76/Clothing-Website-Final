import React from 'react'

import './Register.css'
const Register = () => {
  return (
    <div className='register-container'>
      <div className='register-wrapper'>
        <h1 className='register-title'></h1>
          <form className='register-form'>
            <input className='register-input' placeholder='name'/>
            <input className='register-input' placeholder='last name'/>
            <input className='register-input' placeholder='username'/>
            <input className='register-input' placeholder='email'/>
            <input className='register-input' placeholder='password'/>
            <input className='register-input' placeholder='confirm password'/>
            <span className='agreement'>
                By creating an account, I consent to the processing of my personal
                data in accordance with the <b>PRIVACY POLICY</b>
            </span>
            <button className='register-button'>
              CREATE
            </button>
          </form>
      </div>
    </div>
  )
}

export default Register
