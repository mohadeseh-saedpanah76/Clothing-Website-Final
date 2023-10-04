import { ArrowCircleLeft, ArrowCircleRight } from '@mui/icons-material'
import React , {useState} from 'react'


import SliderWrapper from '../../hoc/Wrapper/SliderWrapper/SliderWrapper'
import {Arrow} from '../../styledComponents/slider/Arrow'

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
      <Arrow direction='left' onClick={()=>sliderHandler('left')}>
        <ArrowCircleLeft></ArrowCircleLeft>
      </Arrow>

      {sliderItems.map((item)=>{
        return <SliderWrapper slideindex={slideIndex} product={item} key={item.id} />
      })}

      <Arrow direction='right' onClick={()=>sliderHandler('right')}>
        <ArrowCircleRight></ArrowCircleRight>
      </Arrow>  
    </div>
  )
}

export default Slider
