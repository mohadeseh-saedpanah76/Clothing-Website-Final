import axios from "axios"


export const productListAction = ()=> async(dispatch)=>{
    try {
        dispatch({type:"PRODUCT-LIST-REQUEST"})
        const {data} = await axios.get("http://localhost:8000/products")

        dispatch({
            type : "PRODUCT-LIST-SUCCESS",
            payload : data
        })
    } catch (error) {
        console.log(error)
    }
}

export const productDetailsAction = (id)=> async (dispatch)=>{
    try {
        dispatch({
            type:"PRODUCT-DETAILS-REQUEST"
        })
       const {data} = await axios.get(`http://localhost:8000/products/${id}`)

       dispatch({
        type:"PRODUCT-DETAILS-SUCCESS",
        payload :data
       })
    } catch (error) {
        console.log(error)
    }
}