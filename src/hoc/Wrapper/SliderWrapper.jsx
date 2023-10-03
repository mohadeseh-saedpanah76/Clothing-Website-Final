import React from 'react'
import {Link} from 'react-router-dom'

const SliderWrapper = ({product}) => {
  return (
    <div >
        <div className='slide'>
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
        </div>
    </div>
  )
}


// فعلا فقط رپر بصورت کامپوننت ساخته شده و باید یک فکری برای پراپس رپر بکنیم
// برای اسلاید و اررو یک  کامپوننت عادی باید ساخته شود.

export default SliderWrapper
