import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import Announcement from '../../components/Announcement/Announcement'
import { FilterColor } from '../../components/FilterColor/FilterColor'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Newsletter from '../../components/Newsletter/Newsletter'

const ProductDetails = () => {
  // const [Product , setProduct] = useState({})
  return (
    <div>
      <Announcement/>
      <Navbar/>
       <div className='product-wrapper'>
        <div className='img-container'>
            <img/>
          </div>
          <div className='info-container'>
            <h1>Denim Jumpsuit</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nulla, dolores. Cupiditate soluta rerum itaque. Dolorem
                ullam ipsum et velit tenetur dolores hic reiciendis molestias
                fugiat vel fuga vero, quis vitae.
            </p>
            <span>
              $20
            </span>
            <div className='filter-container'>
              <div className='filter-item'>
                <span>Color</span>
                <FilterColor color='black'/>
                <FilterColor color='darkblue'/>
                <FilterColor color='gray'/>
              </div>
              <div className='filter-item'>
                <span>Size</span>
                <select>
                  <option>XS</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>

                </select>
              </div>
            </div>
            <div className='add-container'>
              <div className='amount-container'>
                <Remove/>
                <span>1</span>
                <Add/>
              </div>
              <button>ADD TO CART</button>
            </div>
          </div>
       </div>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default ProductDetails
