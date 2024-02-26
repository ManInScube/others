import { Button } from "@/components/elements/Button/Button"
import { Input } from "@/components/elements/Input/Input"
import styles from '@/styles/order/index.module.scss'

export const OrderAddressForm = () =>{
    

    

    return(
        <div className={styles.order}>
            <Input placeholder={"Город"} id={"city"}/>
            <Input placeholder={"Улица"} id={"street"}/>
            <Input placeholder={"Дом"} id={"house"}/>
            <Input placeholder={"Квартира/Офис"} id={"apartment"}/>
            <Button btnWidth={"100%"} text={"Добавить"}/>
        </div>
    )
}