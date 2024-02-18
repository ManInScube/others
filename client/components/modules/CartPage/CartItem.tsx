import { removeFromCartFx } from '@/app/api/shopping-cart'
import Counter from '@/components/elements/Counter/Counter'
import { Cross } from '@/components/elements/Cross/Cross'
import styles from '@/styles/cart/index.module.scss'
import { IProduct } from '@/types/products'
import { IShoppingCartItem } from '@/types/shopping-cart'
import { removeItemFromCart, updateTotalPrice } from '@/utils/shopping-cart'
import { useEffect, useState } from 'react'

export const CartItem = ({props}: {props:IShoppingCartItem}) =>{

    const [price, setPrice] = useState<number>(props.price)
    
    useEffect(()=>{
        setPrice(price  * props.count);
        console.log(price, props.count);
    }, [])

    useEffect(()=>{
        updateTotalPrice(price, props.productId);
    }, [price])    

    const increasePrice = () => setPrice(price + props.price)
    const decreasePrice = () => setPrice(price - props.price)
    const deleteCartItem = () =>removeItemFromCart(props.productId)



    return(
        <li>
            <div className={styles.img}>
                <img src={props.image} />
            </div>
            <div className={styles.info}>
                <div className={styles.infoGroup}>
                    <p className={styles.title}>{props.name}</p>
                    <span>{props.manufacturer}</span>
                    <span>Цвет: {props.color}</span>
                    <span>Размер: {props.size}</span>
                </div>
                    <Counter
                        totalCount={props.in_stock}
                        productId={props.productId}
                        initialCount={props.count}
                        increasePrice={increasePrice}
                        decreasePrice={decreasePrice} 
                        className={styles.counter}
                    />
                <p className={styles.title}>{price}</p>
            </div>
            <a onClick={deleteCartItem} className={styles.cross}>
                <Cross size={'1.57em'}/>
            </a>
        </li>
    )
}