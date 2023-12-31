import { useEffect , useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { Menu,  Search,ShoppingCart  } from '@mui/icons-material'

import {Link} from 'react-router-dom'

import { addToCart } from '../../action/cartAction'

import './Navbar.css'


const Navbar = ({setSearch}) => {

//  const [showSidebar , setShowSidebar] = useState(false)

 const [menuOpen , setMenuOpen] = useState(false)

 const {id} = useParams()
 
 const dispatch  = useDispatch()

 useEffect(()=>{
  if(id){
    dispatch(addToCart(id))
  }
},[dispatch , id])
  
 const cart = useSelector((state)=>state.cart)

 const {cartItems} = cart


 
//  const showSidebarHandle = () =>{
//   setShowSidebar(true)
//  }
 
//  const hideSidebarHandle = () =>{
//   setShowSidebar(false)
//  }

//  const removeFromCartHandler =(id)=>{
//   dispatch(removeFromCart(id))
// }


  return (
    <div className='navbar-container'>

      <div className='hamburger-menu' onClick={()=>setMenuOpen(!menuOpen)}>
            <Menu/>
      </div>
      
      <div className={`wrapper ${menuOpen ? "open" : ""}`}>
      <div className='navbar-left'>

        <div className='search-container'>
          <input placeholder='search here...' onChange={setSearch}/>
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

          <div className='menu-item'>
            <Link to='/products' style={{color:'black' , textDecoration:'none'}}>SHOPPING</Link>
          </div>
          
          <div className='menu-item cart-item-container' >
            <Link style={{color:'black' , textDecoration:'none'}} to='/cart'>
                <ShoppingCart className='shopping-cart' />
                <span className='cart-item'>{cartItems.length}</span>
          </Link>
              
          </div>
        
 
      </div>
      </div>


      {/* ============= Responsive ============ */}

      {/* <div className={`responsive-wrapper ${menuOpen ? "open" : ""}`}>
      <div className='navbar-left'>

        <div className='search-container'>
          <input placeholder='search here...' onChange={setSearch}/>
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

          <div className='menu-item'>
            <Link to='/products' style={{color:'black' , textDecoration:'none'}}>SHOPPING</Link>
          </div>
          
          <div className='menu-item cart-item-container' >
            <Link style={{color:'black' , textDecoration:'none'}} to='/cart'>
                <ShoppingCart className='shopping-cart' />
                <span className='cart-item'>{cartItems.length}</span>
          </Link>
              
          </div>
        
 
      </div>
      </div> */}


      {/* ======== shopping cart sidebar ======== */}
      {/* <div>
        {showSidebar ? (
          <div className='shopping-cart-sidebar'>
          <div onClick={hideSidebarHandle} className="cloth-sidebar">
            <Close/>
          </div>
          <h3>
            YOUR BAG
          </h3>
          {cartItems.length === 0 ? (<p className="empty-cart"> Your shopping cart is empty</p>) : (
              <div className='cart-info'>
                {cartItems.map((item)=>(
                  <div className='container-product' key={item.product}>
                  <div className='product-detail'>
                    <img src={item.image} alt="product img"/>
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
          ) }
          <div className='total-price'>
              total : {cartItems.reduce((acc,item)=> acc + item.price * item.amount , 0)}$
          </div>
          <button className='view-shopping-cart'>
          <Link  style={ {textDecoration:'none' , color :'white' }} to="/cart">
             <p>View shopping cart</p>
          </Link>
          </button>
          
        </div>
        ) : null}
      </div> */}
      
      


    </div>
  )
}

export default Navbar
