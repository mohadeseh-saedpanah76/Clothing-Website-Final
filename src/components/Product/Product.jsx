import { HeartBroken, Search, ShoppingCart } from '@mui/icons-material'


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
        </div>
        <h3>
          {item.title}
        </h3>
      </div>
    </div>
  )
}

export default Product
