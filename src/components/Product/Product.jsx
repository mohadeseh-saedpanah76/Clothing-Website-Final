import { HeartBroken, Search, ShoppingCart } from '@mui/icons-material'

import './Product.css'

const Product = ({item}) => {
  return (
    <div className='product-container'>
      <div className='circle'>
        <img src={item.url}/>
        <div className='info'>
          <div className='icon'>
            <ShoppingCart/>
          </div>
          <div className='icon'>
            <Search/>
          </div>
          <div className='icon'>
            <HeartBroken/>
          </div>
          <h3>
          {item.title}
        </h3>
        </div>
      </div>
    </div>
  )
}

export default Product
