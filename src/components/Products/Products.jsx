import axios from "axios"

import { Link } from "react-router-dom"

import {useState} from "react"
import Loading from "../Loading/Loading"

import Product from "../Product/Product"

import './Products.css'

const Products = () => {
  const [Products , setProducts] = useState([])
  const [loading , setLoading] = useState(true)
  
  axios
  .get("http://localhost:8000/products")
  .then((response)=>{
    
    const products = response.data;
    setProducts(products)
    setLoading(false)
  })
 
  return (
    <div className="products-container">
    {loading ? <Loading> در حال دریافت محصولات</Loading>: 
      Products.map((item)=>{
        return (
          <Link to={`/product/${item.id}`}>
            <Product item={item} key={item.id}/>
          </Link>
        )
      })}
    </div>
  )
}

export default Products
