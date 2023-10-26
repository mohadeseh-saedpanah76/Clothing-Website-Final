import { Add, Remove } from '@mui/icons-material'

import React , { useEffect} from 'react'
import { useParams, redirect, useNavigate } from 'react-router-dom'


import { useSelector , useDispatch } from 'react-redux'


import { productDetailsAction } from '../../action/productAction'

import Announcement from '../../components/Announcement/Announcement'
import { FilterColor } from '../../components/FilterColor/FilterColor'
import Navbar from '../../components/Navbar/Navbar'

import './ProductDetails.css'
import Loading from '../../components/Loading/Loading'


const ProductDetails = () => {

  const dispatch = useDispatch()

  const productDetails = useSelector((state)=>state.productDetails)

  const {loading , product} = productDetails

  const params = useParams()
  const history = useNavigate()


  useEffect(()=>{
    dispatch(productDetailsAction(params.id))
  },[dispatch, params])

  const addToCartHandle = ()=>{
    history(`/cart/${params.id}`)
  }
  return (
    <div>
      <Navbar/>
      <Announcement/>
       {loading ? <Loading> درحال دریافت محصولات</Loading> :
          <div className='product-wrapper'>
          <div className='img-container'>
              <img src={product.url}/>
          </div>
          <div className='info-container-product'>
          <h1>{product.title}</h1>
          <p>
              {product.desc}
          </p>
          <span>
            {product.price}
          </span>
          <div className='filter-container'>
            <div className='filter-item'>
              <span>Color</span>
              <FilterColor color={product.color1}/>
              <FilterColor color={product.color2}/>
              <FilterColor color={product.color3}/>
            </div>
            <div className='filter-item'>
              <span>Size</span>
              <select>
                <option>{product.size1}</option>
                <option>{product.size2}</option>
                <option>{product.size3}</option>
                <option>{product.size4}</option>
                <option>{product.size5}</option>
              </select>
            </div>
          </div>
          <div className='add-container'>
            <div className='amount-container'>
              <Remove/>
              <span>1</span>
              <Add/>
            </div>
            <button onClick={addToCartHandle}>ADD TO CART</button>
          </div>
        </div>      
    </div>
       }
    </div>
  )
}

export default ProductDetails
