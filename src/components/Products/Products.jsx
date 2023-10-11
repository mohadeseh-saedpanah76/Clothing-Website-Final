import axios from "axios"

import {useState} from "react"
import Loading from "../Loading/Loading"

import Product from "../Product/Product"

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
  .then((err)=>{
    console.log(err)
  })

  return (
    <div>
    {loading ? <Loading> در حال دریافت محصولات</Loading>: <div>
      {Products.map((item)=>{
        return <Product item={item} key={item.id}/>
      })}
    </div>}
    </div>
  )
}

export default Products
