import { Add ,HighlightOff, Remove } from '@mui/icons-material'
import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import { TopButton } from '../../components/TopButton/TopButton'

import { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { addToCart , removeFromCart} from '../../action/cartAction'

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
    dispatch(removeFromCart(id))
 }

  

 return (
    <div className='cart-container'>
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

        {cartItems.length === 0 ? (<p className="empty-cart"> Your shopping cart is empty</p>) : (
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
                    <div className='product-amount'>{item.amount}</div>
                    <Remove/>
                  </div>
                  <div>
                   <span className='product-price'>{item.price * item.amount}$</span>
                  </div>
                  <div>
                    <button onClick={()=> removeFromCartHandler(item.product)}>
                    <HighlightOff/>
                    </button>
                  </div>

                </div>

               
            </div>
              ))}
            </div>
  
            <div className='cart-summary'>
              <h1>ORDER SUMMARY</h1>
              <div className='summary-item'>
                <span> Total: {cartItems.reduce((acc , item)=> acc + item.price * item.amount ,0)}$</span>
                <span></span>
              </div>
              <button>CHECKOUT NOW</button>
            </div>
          </div>
        ) }

      
      </div>
      <Footer/>
    </div>
  )
}

export default Cart
