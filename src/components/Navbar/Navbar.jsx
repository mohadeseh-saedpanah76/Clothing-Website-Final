import { Search,ShoppingCart  } from '@mui/icons-material'
import { Badge } from '@mui/material'

import {Link} from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
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
          
          <div className='menu-item'>
            <Link style={{color:'black' , textDecoration:'none'}} to='/cart'>
              <Badge color="secondary">
                <ShoppingCart />
              </Badge></Link>
          </div>
 
      </div>
      </div>

    </div>
  )
}

export default Navbar
