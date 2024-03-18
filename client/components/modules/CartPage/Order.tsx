import { useUnit } from "effector-react"
import { OrderAddressForm } from "./OrderAddressForm"
import { $totalPrice, setShoppingCart } from "@/context/shopping-cart"
import { checkPaymentFx, makePaymentFx } from "@/app/api/payment"
import { useRouter } from "next/router"
import { removeFromCartFx } from "@/app/api/shopping-cart"
import { $user } from "@/context/user"
import { Button } from "@/components/elements/Button/Button"
import { useEffect } from "react"
import styles from '@/styles/order/index.module.scss'


const Order = () =>{

    const totalPrice = useUnit($totalPrice)
    const router =  useRouter()
    const user = useUnit($user)

    useEffect(()=>{
        const paymentId = sessionStorage.getItem('paymentId') 
        
        if(paymentId){
            checkPayment(paymentId)
        }
    }, [])

    const makePay = async () =>{
        try {
            const data  = await makePaymentFx({
                url: '/payment',
                amount: totalPrice
            })

            sessionStorage.setItem('paymentId', data.id)

            router.push(data.confirmation.confirmation_url)


        } catch (error) {
            console.error((error as Error).message)
        }
    }

    const checkPayment = async(paymentId: string) =>{
        try {
            const data  = await checkPaymentFx({
                url: '/payment',
                paymentId,
            })

            if(data.status === 'succeeded'){
                resetCart()
                return
            }
        } catch (error) {
            console.error((error as Error).message)
            resetCart()
        }
    }

    const resetCart = async() =>{
        sessionStorage.removeItem('paymentId')
            await removeFromCartFx(`/shopping-cart/all/${user.userId}`)
            setShoppingCart([])
    }

    return(
        <div className={styles.order__container}>
            <OrderAddressForm/>
            <Button btnWidth={"100%"} text={"Оплатить"} onClick={makePay}/>
        </div>
    )
}

export default Order