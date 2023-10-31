import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { Add, HighlightOff, Remove, Search,ShoppingCart  } from '@mui/icons-material'

import {Link} from 'react-router-dom'

import { addToCart , removeFromCart} from '../../action/cartAction'

import './Navbar.css'

const Navbar = () => {
 const {id} = useParams()
 
 const dispatch  = useDispatch()

 useEffect(()=>{
  if(id){
    dispatch(addToCart(id))
  }
},[dispatch , id])
  
 const cart = useSelector((state)=>state.cart)

 const {cartItems} = cart

 const removeFromCartHandler =(id)=>{
  dispatch(removeFromCart(id))
}
  return (
    <div className='navbar-container'>

      <div className='wrapper'>
      <div className='navbar-left'>
        <span>EN</span>

        <div className='search-container'>
          <input/>
          <Search style={{color:'gray', fontSize:18 , margin:'.5rem' }}/>
        </div>
      </div>

      <div className='navbar-center'>
        <a href='/'>
          <h1>
            LAMA.
          </h1>
        </a>
      </div>

      <div className='navbar-right'>
          <div className='menu-item'>
            <Link to='/register' style={{color:'black' , textDecoration:'none'}}>REGISTER</Link>
          </div>
          
          <div className='menu-item'>
          <Link to='/login' style={{color:'black' , textDecoration:'none'}}>SIGN IN</Link>
          </div>
          
          <div className='menu-item cart-item-container'>
            <Link style={{color:'black' , textDecoration:'none'}} to='/cart'>
                <ShoppingCart className='shopping-cart' />
                <span className='cart-item'>{cartItems.length}</span>
          </Link>
          </div>
 
      </div>
      </div>

      <div className='shopping-cart-sidebar'>
        <h3>
          YOUR BAG
        </h3>
        {cartItems.length === 0 ? (<p className="empty-cart"> Your shopping cart is empty</p>) : (
            <div className='cart-info'>
              {cartItems.map((item)=>(
                <div className='container-product' key={item.product}>
                <div className='product-detail'>
                  <img src={item.image}/>
                </div>
                <div className='price-detail'>
                  <div className='amount-container'>
                    <Add/>
                    <div className='product-amount'>1</div>
                    <Remove/>
                  </div>
                  <div>
                   <span className='product-price'>{item.price}</span>
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
        ) }
        <div className='total-price'>
            total : {cartItems.reduce((acc,item)=> acc + item.price , 0)}
        </div>
        <Link  style={ {textDecoration:'none' , color :'white' , textAlign:'center'  }} to="/cart">
           <p>View shopping cart</p>
        </Link>
        
      </div>


    </div>
  )
}

export default Navbar
