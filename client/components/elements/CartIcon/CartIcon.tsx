import { useUnit } from "effector-react"
import { CartSvg } from "../Header/CartSvg"
import { $shoppingCart } from "@/context/shopping-cart"
import styles from '@/styles/header/header-cart/index.module.scss'

export const CartIcon = () =>{

    const shoppingCart = useUnit($shoppingCart);

    return(
        <a className={styles.headerCart}>
            <CartSvg/>
            <span>({shoppingCart.length})</span>
        </a>
    )
}