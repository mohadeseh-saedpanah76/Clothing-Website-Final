import { Link } from "react-router-dom"

import { useEffect} from "react"

import { useSelector , useDispatch } from "react-redux"
import Loading from "../Loading/Loading"

import Product from "../Product/Product"
import { productListAction } from "../../action/productAction"

import './Products.css'

const Products = ({search}) => {
  
  const dispatch = useDispatch()
  

  const productList = useSelector((state)=>state.productList)

  const {loading , products} = productList

  useEffect(()=>{

    dispatch(productListAction())

  },[dispatch])
  
  return (
    <div className="products-container">
    {loading ? <Loading> در حال دریافت محصولات</Loading>: 
        products.filter((item)=>{
          return (search.toLowerCase === "" ? item : item.title.toLowerCase().includes(search))
        })
        .map((item)=>{
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
