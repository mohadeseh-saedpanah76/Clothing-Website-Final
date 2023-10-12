import axios from "axios"

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
        return <Product item={item} key={item.id}/>
      })}
    </div>
  )
}

export default Products
