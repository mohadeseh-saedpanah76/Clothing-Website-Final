import { ArrowCircleLeft, ArrowCircleRight } from '@mui/icons-material'
import React , {useState} from 'react'

import Wrapper from '../../hoc/Wrapper/SliderWrapper'

import {sliderItems} from '../../data'

import './Slider.css'



const Slider = () => {

  const [slideIndex , setSlideIndex] = useState(0)


  const sliderHandler = (direction)=>{
    if (direction === 'left'){
      setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
    }else{
      setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
    }
  }
 
  return (
    <div className='slider-container'>
      <div className='arrow' onClick={()=>sliderHandler('left')}>
          <ArrowCircleLeft></ArrowCircleLeft>
      </div>

      {sliderItems.map((item)=>{
        return <Wrapper product={item} key={item.id}/>
      })}

      <div className='arrow' onClick={()=>sliderHandler('right')}>
          <ArrowCircleRight></ArrowCircleRight>
      </div>
    </div>
  )
}

export default Slider
