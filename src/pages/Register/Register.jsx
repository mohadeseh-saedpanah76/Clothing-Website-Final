import axios from 'axios'
import React , {useState} from 'react'
import Input from '../../components/Input/Input'

import './Register.css'
const Register = () => {

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
      email :{
        elementType : 'input',
        elementConfig :{
          type : 'email',
          placeholder :'Email'
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
      confirm :{
        elementType : 'input',
        elementConfig :{
          type : 'password',
          placeholder :'confirm password'
        },
        value: ''
      },
    }
  })

  let elementArray = []

  for(let item in input.form){
    elementArray.push({
      id : item,
      config : input.form[item]
    })
  }

  const inputChangeHandler =(event , inputElement)=>{
   const updatedForm = {...input.form}

   const updatedElement = {...updatedForm[inputElement]}

   updatedElement.value = event.target.value

   updatedForm[inputElement] = updatedElement

   setInput({form : updatedForm})
  }

  const submitHandler = (event)=>{
    event.preventDefault()

    const formData = {}

    for(let item in input.form){
      formData[item] = input.form[item].value
    }

    axios.post('http://localhost:8000/users' , formData)
    .then((response)=>{console.log(response)})
    .catch((err)=>{console.log(err)})
  }

  return (
    <div className='register-container'>
      <div className='register-wrapper'>
          <form className='register-form' onSubmit={(event)=>submitHandler(event)}>
            {elementArray.map((item)=>(
            <Input
              key={item.id}
              elementType ={item.config.elementType}
              elementConfig ={item.config.elementConfig}
              value ={item.config.value}
              change = {(event)=>inputChangeHandler(event , item.id)}
              className='register-input'
              />
            ))}
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
