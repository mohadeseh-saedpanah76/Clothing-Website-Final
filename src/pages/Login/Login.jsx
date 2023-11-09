import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom'

import Input from '../../components/Input/Input'

import { Link } from 'react-router-dom'

import './Login.css'

const Login = () => {

  const history = useNavigate()

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

  let elementArray = []

  for(let item in input.form){
    elementArray.push({
      id : item,
      config : input.form[item]
    })
  }

 const inputChangeHandler = (event , inputElement)=>{

   const updatedForm = {
    ...input.form,
   }

   const updatedElement = {...updatedForm[inputElement]}

   updatedElement.value = event.target.value

   updatedForm[inputElement] = updatedElement

   setInput({form : updatedForm})

  }

  const loginHandler = ()=>{
    history('/')
  }

  const submitHandler = (event)=>{
    event.preventDefault()

    const formData = {}

    for(let item in input.form){
      formData[item] = input.form[item].value
    }

    // axios.post('http://localhost:8000/users' , formData)
    // .then((response)=> {console.log(response)})
    // .catch((err)=>{console.log(err)})

    console.log(formData)
  }


  return (
    <div className='login-container'>
      <div className='login-wrapper'>
        <h1 className='login-title'>SIGN IN</h1>
        <form className='login-form' onSubmit={(event)=> submitHandler(event)}>
          {elementArray.map((item)=>(
            <Input
             key ={item.id}
             elementType ={item.config.elementType}
             elementConfig={item.config.elementConfig}
             value ={item.config.value}
             change = {(event)=>inputChangeHandler(event , item.id)}
             className = "login-input"
            />
          ))}
          
          <button className='login-button'> LOGIN </button>
          <Link to='/register' style={{textDecoration:'none', color :'teal', fontSize:'14px' , fontWeight:'bold'}}> CREATE A NEW ACCOUNT</Link>
        </form>
      </div>
    </div>
  )
}

export default Login
