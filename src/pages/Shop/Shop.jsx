import React ,{ useEffect , useState} from 'react'

import { useSelector , useDispatch } from 'react-redux'

import Navbar from '../../components/Navbar/Navbar'
import Newsletter from '../../components/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'
import Loading from "../../components/Loading/Loading"
import Product from "../../components/Product/Product"

import { productListAction } from '../../action/productAction'

import './Shop.css'
import { Link } from 'react-router-dom'

const Shop = () => {

  const [search , setSearch] = useState("")

  const [select , setSelect] = useState("")

  const dispatch = useDispatch()
  

  const productList = useSelector((state)=>state.productList)

  const {loading , products} = productList
  
  useEffect(()=>{

    dispatch(productListAction())

  },[dispatch])


 
  return (
    <div>
      <Navbar setSearch={(e)=>setSearch(e.target.value)}/>
      <h1 className='shop-text'>
        SHOPPING
      </h1>
      <div className='filter-container'>
        {/* <div className='filter-item'>
          <span className='filter-text'>
            Filter Products:
          </span>
          <select>
            <option disabled selected>Color</option>
            <option>Black</option>
            <option>White</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
            <option>Gray</option>
          </select>

          <select>
            <option disabled selected>Size</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            
          </select>
        </div> */}

        <div className='filter-item'>
        <span className='filter-text'>
            Sort Products:
        </span>
        <select onChange={(e)=>setSelect(e.target.value)} value={select}>
            <option value="">choose a category</option>
            <option value="female">Women</option>
            <option  value="men">Men</option>            
          </select>
        </div>
      </div>
      <div className='shop-container'>
        {loading ? <Loading> در حال دریافت محصولات</Loading>: 
        products.filter((item)=>{
          return (search.toLowerCase === "" ? item : item.title.toLowerCase().includes(search))
        })
        .filter((item)=>{
          return (select.toLowerCase === "" ? item : item.category.toLowerCase().includes(select))
        })
        .map((item)=>{
          return (
            <Link to={`/product/${item.id}`}>
              <Product item={item} key={item.id}/>
            </Link>
           )
        })
        
      }
      </div>

      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Shop
