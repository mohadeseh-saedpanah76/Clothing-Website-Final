export const cartReducer = (state = {cartItems :[]} , action)=>{
    switch (action.type){
        case "CART-ADD-ITEM":
            // محصولی از قبل در سبد خرید وجود دارد
            const item = action.payload

            // شمارنده آی محصولی است که الان می خواهد به سبد خرید اضافه شود
            // ابتدا چک می شود تا از قبل در سبد خرید وجود نداشته باشد
            const existingItem = state.cartItems.find(
               (i)=> i.product === item.product
              
            )

            if(existingItem){
                return {
                    ...state,
                    cartItems : state.cartItems.map((i)=>
                        i.product === existingItem.product ? item : i
                    ),
                }
            }else{
                return {
                    ...state,
                    cartItems : [...state.cartItems , item]
                }
            }
        case "CART-REMOVE-ITEM":
            return {
                ...state.cartItems,
                cartItems : state.cartItems.filter((i)=>{return(i.product !== action.payload)})
            }
        
        default:
            return state   
    }
}