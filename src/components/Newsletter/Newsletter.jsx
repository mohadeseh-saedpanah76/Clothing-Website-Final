import { Send } from '@mui/icons-material'

import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter-container'>
      <h1>
        Newsletter
      </h1>
      <span>
        Get timely updates from your favorite products.
      </span>
      <div className='input-container'>
          <input placeholder='Your Email'/>
          <button>
            <Send/>
          </button>
      </div>
    </div>
  )
}

export default Newsletter
