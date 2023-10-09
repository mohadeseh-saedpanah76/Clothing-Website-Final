import { Facebook, Instagram, Mail, Map, Phone, Pinterest, Twitter } from '@mui/icons-material'

import imgpayment from '../../assets/imgpayment.png'

import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='left'>
        <h1>
          LAMA.
        </h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat.
        </p>
        <div className='social-container'>
          <div className='social-icon' style={{backgroundColor:'#3B5999'}}>
            <Facebook/>
          </div>
          <div className='social-icon' style={{backgroundColor:'#E4405F'}}>
            <Instagram/>
          </div>
          <div className='social-icon' style={{backgroundColor:'#55ACEE'}}>
            <Twitter/>
          </div>
          <div className='social-icon' style={{backgroundColor:'#E60023'}}>
            <Pinterest/>
          </div>
        </div>
      </div>

      <div className='center'>
        <h3>
          Useful Links
        </h3>
        <ul className="link-list">
          <li className='link-item'>Home</li>
          <li className='link-item'>Cart</li>
          <li className='link-item'>Man Fashion</li>
          <li className='link-item'>Woman Fashion</li>
          <li className='link-item'>Accessories</li>
          <li className='link-item'>My Account</li>
          <li className='link-item'>Order Tracking</li>
          <li className='link-item'>Wishlist</li>
          <li className='link-item'>Wishlist</li>
          <li className='link-item'>Terms</li>
        </ul>
      </div>

      <div className='right'>
        <h3>
          Contact
        </h3>

        <div className='contact-item'>
          <Map style={{marginRight:'20px'}}/>
          622 Dixie Path , South Tobinchester 98336
        </div>
        <div className='contact-item'>
          <Phone style={{marginRight:'20px'}}/>
          +1 234 56 78 
        </div>
        <div className='contact-item'>
          <Mail style={{marginRight:'20px'}}/>
          contact@lama.dev
        </div>
        <img src={imgpayment} className='payment'/>
      </div>
    </div>
  )
}

export default Footer
