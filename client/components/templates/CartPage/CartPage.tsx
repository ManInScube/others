import { getCartItemFx } from '@/app/api/shopping-cart';
import { Button } from '@/components/elements/Button/Button';
import { CartItem } from '@/components/modules/CartPage/CartItem';
import { $shoppingCart, $totalPrice, setShoppingCart, setTotalPrice } from '@/context/shopping-cart';
import { $user } from '@/context/user';
import { useRedirectByUserCheck } from '@/hooks/useRedirectByUserCheck';
import { useUnit } from 'effector-react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import styles from '@/styles/cart/index.module.scss'
import OrderPersonalForm from '@/components/modules/CartPage/OrderPersonalForm';
import { OrderAddressForm } from '@/components/modules/CartPage/OrderAddressForm';
import Order from '@/components/modules/CartPage/Order';

export const CartPage = () =>{
    const {shouldLoadContent} = useRedirectByUserCheck(false)
    const shoppingCart = useUnit($shoppingCart);
    const user = useUnit($user);
    const total_price = useUnit($totalPrice);
    const [order, setOrder] = useState<boolean>(false);    

    useEffect(()=>{
        loadCartItem();
    }, [])

    useEffect(() => {
        setTotalPrice(
          shoppingCart.reduce(
            (defaultCount, item) => defaultCount + item.total_price,
            0
          )
        )
      }, [shoppingCart])


//Optimize
    const loadCartItem = async() => {
        try {
            const cartItems = await getCartItemFx(`/shopping-cart/${user.userId}`);
            setShoppingCart(cartItems)
        } catch (error) {
            toast.error((error as Error).message)
        }
    } 

    return(
        <div className={`container ${styles.cart}`}>
            {shoppingCart.length==0
            ? 
            <>
                <h1>Корзина: {shoppingCart.length}</h1>
                <div className={styles.cart__empty}>
                    <p>Тут пока ничего нет(</p>
                    <Button btnWidth={'33%'} text={'перейти в каталог'}/>
                </div> 
            </>
            :
            <div className={styles.cart__row}>
                <div className={styles.cart__left}>
                    <h1>Корзина: {shoppingCart.length}</h1>
                    <ul className={styles.cart__list}>
                        {shoppingCart.map((item)=>(
                            <CartItem props={item} />
                        ))}
                    </ul>

                    <div className={styles.cart__info}>
                        <span>Количество товаров: {shoppingCart.length}</span>
                        <span>Общая стоимость товаров</span>

                        <p>Итого: {total_price} P</p>
                    </div> 
                </div>
                <div className={styles.cart__right}>
                    {/* <Button btnWidth={'80%'} text={'Перейти к оформлению'}/> */}
                    {/* <OrderPersonalForm/> */}
                    <Order/>
                </div>
            </div>
            }

        </div>
    )
}