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
               />
            )
        break
        default :
            inputElement = (
              <input
              className={props.className}
              {...props.elementConfig} 
              value = {props.value}
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
