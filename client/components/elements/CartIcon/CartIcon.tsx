import { useUnit } from "effector-react"
import { CartSvg } from "../Header/CartSvg"
import { $shoppingCart, setShoppingCart } from "@/context/shopping-cart"
import styles from '@/styles/header/header-cart/index.module.scss'
import { useRedirectByUserCheck } from "@/hooks/useRedirectByUserCheck"
import { useEffect, useState } from "react"
import { getCartItemFx } from "@/app/api/shopping-cart"
import { toast } from "react-toastify"
import { $user } from "@/context/user"

export function CartIcon(){
    const {shouldLoadContent} = useRedirectByUserCheck()
    const shoppingCart = useUnit($shoppingCart);
    const [count, setCount] = useState<number>(0);
    const user = useUnit($user);

    // useEffect(()=>{
    //     loadCartItem();
    //     setCount(shoppingCart.length)
    // },[])


    // const loadCartItem = async() => {
    //     try {
    //         const cartItems = await getCartItemFx(`/shopping-cart/${user.userId}`);
    //         setShoppingCart(cartItems)
    //     } catch (error) {
    //         toast.error((error as Error).message)
    //     }
    // } 

    return(
        <div className={styles.headerCart}>
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="35" viewBox="0 0 34 35" fill="none">
                <path d="M3.66683 34.181H30.3335C32.1668 34.181 33.6668 32.681 33.6668 30.8477V9.18099H26.8502C26.0527 4.45932 21.9452 0.847656 17.0002 0.847656C12.0552 0.847656 7.94766 4.45932 7.151 9.18099H0.333496V30.8477C0.333496 32.681 1.8335 34.181 3.66683 34.181ZM17.0002 4.18099C20.0993 4.18099 22.7043 6.31016 23.4477 9.18099H10.5527C11.296 6.31016 13.901 4.18099 17.0002 4.18099ZM7.00016 12.5143V15.8477H10.3335V12.5143H23.6668V15.8477H27.0002V12.5143H30.3335V30.8477H3.66683V12.5143H7.00016Z" fill="#F8F4F1"/>
            </svg>
            <span>({shoppingCart.length})</span>
        </div>
    )
}

