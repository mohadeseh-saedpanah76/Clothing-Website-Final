import React , {useState} from 'react'

import Input from '../../components/Input/Input'

import { Link } from 'react-router-dom'

import './Login.css'

const Login = () => {
  const [input , setInput] = useState({
    form : {
      name :{
        elementType : 'input',
        elementConfig :{
          type : 'text',
          placeholder :'username'
        },
        value: ''
      },
      password :{
        elementType : 'input',
        elementConfig :{
          type : 'password',
          placeholder :'password'
        },
        value: ''
      },
    }
  })

  return (
    <div className='login-container'>
      <div className='login-wrapper'>
        <h1 className='login-title'>SIGN IN</h1>
        <form className='login-form'>
          <Input placeholder='username' type='text' className='login-input'/>
          <Input placeholder='password' type='password' className='login-input'/>
          <button className='login-button'> LOGIN </button>
          <Link to='/register' style={{textDecoration:'none', color :'teal', fontSize:'14px' , fontWeight:'bold'}}> CREATE A NEW ACCOUNT</Link>
        </form>
      </div>
    </div>
  )
}

export default Login
