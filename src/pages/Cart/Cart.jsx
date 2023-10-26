import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import Announcement from '../../components/Announcement/Announcement'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import { TopButton } from '../../components/TopButton/TopButton'

import { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { addToCart } from '../../action/cartAction'

import './Cart.css'

const Cart = () => {

 const {id} = useParams()
 const dispatch  = useDispatch()
 
 const cart = useSelector(state=>state.cart) 

 const {cartItems} = cart

 console.log(cartItems)
 useEffect(()=>{
    if(id){
      dispatch(addToCart(id))
    }
 },[dispatch , id])

  
 return (
    <div className='cart-container'>
      <Announcement/>
      <Navbar/>
      <div className='cart-wrapper'>
        <h1>
          YOUR BAG
        </h1>
        <div className='cart-top'>
          <TopButton >CONTINUE SHOPPING</TopButton>
          <div className='top-texts'>
            <span className='top-text'>Shopping Bag(2)</span>
            <span className='top-text'>Your Wishlist(0)</span>
          </div>
          <TopButton type='filled'>CHECKOUT NOW</TopButton>
        </div>

        <div className='cart-bottom'>
          <div className='cart-info'>
            <div className='container-product'>
                <div className='product-detail'>
                  <img src="/"/>
                  <div className='details'>
                    <span className='product-name'><b>Product:</b>T-SHIRT</span>
                    <span className='product-id'><b>ID:</b> 93813718293</span>
                    <div className='product-color'></div>
                    <span className='product-size'><b>Size:</b>XL</span>
                  </div>
                </div>
                <div className='price-detail'>
                  <div className='amount-container'>
                    <Add/>
                    <div className='product-amount'>1</div>
                    <Remove/>
                  </div>
                  <span className='product-price'>$50</span>
                </div>
            </div>
          </div>

          {/* <div className='cart-summary'>
            <h1>ORDER SUMMARY</h1>
          </div> */}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Cart
