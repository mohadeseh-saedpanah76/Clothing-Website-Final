import { Search, ShoppingBag } from '@mui/icons-material'

import {Link} from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>

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
            <Link to='/register'>REGISTER</Link>
          </div>
          
          <div className='menu-item'>
          <Link to='login'>SIGN IN</Link>
          </div>
          
          <div className='menu-item'>
            <Link><ShoppingBag/></Link>
          </div>
 
      </div>
    </div>
  )
}

export default Navbar
