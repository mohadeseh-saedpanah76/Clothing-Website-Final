import React from 'react'

import Announcement from '../../components/Announcement/Announcement'
import Categories from '../../components/Categories/Categories'
import Navbar from '../../components/Navbar/Navbar'
import Newsletter from '../../components/Newsletter/Newsletter'
import Slider from '../../components/Slider/Slider'

const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Newsletter/>
    </div>
  )
}

export default Home
