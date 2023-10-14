import React ,{useState} from 'react'

import axios from "axios"

import Announcement from '../../components/Announcement/Announcement'
import Navbar from '../../components/Navbar/Navbar'
import Newsletter from '../../components/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'
import Loading from "../../components/Loading/Loading"
import Product from "../../components/Product/Product"

import './Shop.css'
const Shop = () => {
  const [Products , setProducts] = useState([])
  const [loading , setLoading] = useState(true)
  
  axios
  .get("http://localhost:8000/products")
  .then((response)=>{
    
    const products = response.data;
    setProducts(products)
    setLoading(false)
  })
  return (
    <div>
      <Announcement/>
      <Navbar/>

      <div className='filter-container'>
        <div className='filter-item'>
          <span className='filter-text'>
            Filter Products:
          </span>
          <select>
            <option disabled selected>Color</option>
            <option>Black</option>
            <option>White</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
            <option>Gray</option>
          </select>

          <select>
            <option disabled selected>Size</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            
          </select>
        </div>

        <div className='filter-item'>
        <span className='filter-text'>
            Sort Products:
        </span>
        <select>
            <option selected>Newset</option>
            <option>Price (asc)</option>
            <option>Black (desc)</option>
            
          </select>
        </div>
      </div>
      <div className='shop-container'>
        {loading ? <Loading> در حال دریافت محصولات</Loading>: 
        Products.map((item)=>{
          return <Product item={item} key={item.id}/>
        })}
      </div>

      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Shop
