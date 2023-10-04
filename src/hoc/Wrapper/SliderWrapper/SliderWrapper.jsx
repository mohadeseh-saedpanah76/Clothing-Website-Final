import React from 'react'
import {Link} from 'react-router-dom'

import {Wrapper} from '../../../styledComponents/slider/Wrapper'
import {Slide} from '../../../styledComponents/slider/Slide'


const SliderWrapper = ({product , slideindex}) => {
  return (
    <Wrapper slideindex={slideindex}>
        <Slide bg={product.bg}>
            <div className='image-Container'>
               <image src={product.image}/>
            </div>
            <div className='info-container'>
                <h1>
                  {product.title}
                </h1>
                <p>
                  {product.desc}
                </p>
                <Link to='/products'>
                  <button>
                    SHOW NOW
                  </button>
                </Link>
            </div>
        </Slide>
    </Wrapper>
  )
}


// فعلا فقط رپر بصورت کامپوننت ساخته شده و باید یک فکری برای پراپس رپر بکنیم
// برای اسلاید و اررو یک  کامپوننت عادی باید ساخته شود.

export default SliderWrapper
