import { FavoriteRounded, Search, ShoppingCart } from '@mui/icons-material'

import './Product.css'

const Product = ({item}) => {
  return (
    <div className='product-container'>
      <div className='circle'></div>
        <img src={item.url} className='product-img'/>
        <div className='info'>
         <div className='icon-list'>
          <div className='icon'>
              <ShoppingCart/>
            </div>
            <div className='icon'>
              <Search/>
            </div>
            <div className='icon'>
              <FavoriteRounded/>
            </div>
         </div>
         {/* <h3>
          {item.title}
        </h3> */}
        </div>
      
    </div>
  )
}

export default Product
