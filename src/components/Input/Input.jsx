import React from 'react'

import './Input.css'

const Input = (props) => {
    let inputElement = null

    switch(props.inputType){
        case 'input' :
            inputElement = (
              <input
              className={props.className}
               {...props.elementConfig} 
               value = {props.value}
               onChange = {props.change}
               />
            )
        break
        default :
            inputElement = (
              <input
              className={props.className}
              {...props.elementConfig} 
              value = {props.value}
              onChange = {props.change}
              />
            )
    }

  return (
    <div>
      {inputElement }
    </div>
  )
}

export default Input
