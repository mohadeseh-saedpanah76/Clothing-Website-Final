import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'

import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Shop from './pages/Shop/Shop'
import ProductDetails from './pages/ProductDetails/ProductDetails'


const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart/:id?' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/products' element={<Shop/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
      </Routes>
    </Router>
  )
}

export default App
