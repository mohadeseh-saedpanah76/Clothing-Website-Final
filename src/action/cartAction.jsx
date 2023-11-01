import axios from "axios"

export const addToCart = (id) => async(dispatch , getState)=>{
    // اطلعات یک محصول از بک اند گرفته می شه و به سبد خرید اضافه میشه
 const {data} = await axios.get(`http://localhost:8000/products/${id}`)

 dispatch({
    type: "CART-ADD-ITEM",
    payload : {
        product : data.id,
        name : data.title,
        image : data.url,
        price : data.price,
        productId : data.productId,
        amount : data.amount

    }
 })

 localStorage.setItem('cartItems' , JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch , getState) =>{

    dispatch({
        type: "CART-REMOVE-ITEM",
        payload :id
    })

    localStorage.setItem('cartItems' , JSON.stringify(getState().cart.cartItems))

}