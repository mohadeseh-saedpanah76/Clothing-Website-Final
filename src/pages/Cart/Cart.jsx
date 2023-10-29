import { Add, Delete, Remove } from '@mui/icons-material'
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

 useEffect(()=>{
    if(id){
      dispatch(addToCart(id))
    }
 },[dispatch , id])

 const removeFromCartHandler =(id)=>{
    console.log("remove")
 }

  
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
            <span className='top-text'>Shopping Bag : {cartItems.length}</span>
            <span className='top-text'>Your Wishlist(0)</span>
          </div>
          <TopButton type='filled'>CHECKOUT NOW</TopButton>
        </div>

        {cartItems.length === 0 ? (<p> سبد خرید شما خالی است</p>) : (
            <div className='cart-bottom'>
            <div className='cart-info'>
              {cartItems.map((item)=>(
                <div className='container-product' key={item.product}>
                <div className='product-detail'>
                  <img src={item.image}/>
                  <div className='details'>
                    <span className='product-name'><b>Product:</b>{item.name}</span>
                    <span className='product-id'><b>ID:</b>{item.productId}</span>
                    {/* <div className='product-color'></div>
                    <span className='product-size'><b>Size:</b>XL</span> */}
                  </div>
                </div>
                <div className='price-detail'>
                  <div className='amount-container'>
                    <Add/>
                    <div className='product-amount'>1</div>
                    <Remove/>
                  </div>
                  <span className='product-price'>{item.price}</span>
                  <button onClick={()=> removeFromCartHandler(item.product)}>
                  <Delete/>
                  </button>
                </div>

               
            </div>
              ))}
            </div>
  
            {/* <div className='cart-summary'>
              <h1>ORDER SUMMARY</h1>
            </div> */}
          </div>
        ) }

      
      </div>
      <Footer/>
    </div>
  )
}

export default Cart
