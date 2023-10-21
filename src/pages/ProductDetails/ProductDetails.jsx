import { Add, Remove } from '@mui/icons-material'

import React , {useState} from 'react'
import { useParams } from 'react-router-dom'


import axios from 'axios'

import Announcement from '../../components/Announcement/Announcement'
import { FilterColor } from '../../components/FilterColor/FilterColor'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Newsletter from '../../components/Newsletter/Newsletter'

import './ProductDetails.css'


const ProductDetails = () => {

  const params = useParams()

  const [Product , setProduct] = useState({})

  axios.get(`http://localhost:8000/products/${params.id}`)
  .then((response)=>{
    const product = response.data
    
    setProduct(product)
  })

  return (
    <div>
      <Navbar/>
      <Announcement/>
       <div className='product-wrapper'>
            <div className='img-container'>
                <img src={Product.url}/>
            </div>
            <div className='info-container-product'>
            <h1>{Product.title}</h1>
            <p>
                {Product.desc}
            </p>
            <span>
              {Product.price}
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
      {/* <Newsletter/>
      <Footer/> */}
    </div>
  )
}

export default ProductDetails
