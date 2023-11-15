import React,{useState} from 'react'

import Categories from '../../components/Categories/Categories'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Newsletter from '../../components/Newsletter/Newsletter'
import Slider from '../../components/Slider/Slider'
import Products from '../../components/Products/Products'

const Home = () => {
  const [search , setSearch] = useState("")
  return (
    <div>
      <Navbar setSearch={(e)=>setSearch(e.target.value)}/>
      <Slider/>
      <Categories/>
      <Products search={search}/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home
