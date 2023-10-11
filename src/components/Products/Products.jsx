import axios from "axios"

import {useState} from "react"

import Product from "../Product/Product"

const Products = () => {
  const [Products , setProducts] = useState([])
  
  axios
  .get("http://localhost:8000/products")
  .then((response)=>{
    
    const products = response.data;
    setProducts(products)
  })
  .then((err)=>{
    console.log(err)
  })

  return (
    
    <div>
      {Products.map((item)=>{
        return <Product item={item} key={item.id}/>
      })}
    </div>
  )
}

export default Products
