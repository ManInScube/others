import { addToCartFx, removeFromCartFx, updateCartItemFx } from "@/app/api/shopping-cart"
import { removeShoppingCartItem, updateCartItemTotalPrice, updateShoppingCart } from "@/context/shopping-cart"

export const toggleCartItem = async (email: string, productId: number, isInCart?: boolean) =>{
    try {
        // if(isInCart){
        //     await removeFromCartFx(`/shopping-cart/one/${productId}`)
        //     removeShoppingCartItem(productId)
        //     return
        // }

        const data = await addToCartFx({
            url: '/shopping-cart/add',
            email,
            productId
        })

        console.log(data);

        updateShoppingCart(data)
    } catch (error) {
        
    }
}

export const removeItemFromCart = async (productId: number) =>{
    try {
        await removeFromCartFx(`/shopping-cart/one/${productId}`)
        removeShoppingCartItem(productId)
    } catch (error) {
        
    }
}

export const updateTotalPrice = async (total_price: number, productId: number) => {
    const data = await updateCartItemFx({
      url: `/shopping-cart/total_price/${productId}`,
      payload: { total_price },
    })
  
    updateCartItemTotalPrice({ productId, total_price: data.total_price })
}