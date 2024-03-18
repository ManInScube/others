import { addAddressFx, getAddressesFx } from "@/app/api/delivery"
import { Button } from "@/components/elements/Button/Button"
import { Input } from "@/components/elements/Input/Input"
import { $delivery, setDeliveryAddress } from "@/context/order"
import { $user } from "@/context/user"
import styles from '@/styles/order/index.module.scss'
import { useUnit } from "effector-react"
import { useEffect, useRef, useState } from "react"
import AddressItem from "./AddressItem"

export const OrderAddressForm = () =>{
    
    const user = useUnit($user)
    const addresses = useUnit($delivery);

    const [city, setCity] = useState<string>('');
    const [street, setStreet] = useState<string>('');
    const [house, setHouse] = useState<string>('');
    const [apartment, setApartment] = useState<string>('');


    useEffect(()=>{
        loadAddresses()
    },[])

    const addAddress = async() =>{
        console.log(city)
        try {
            const data  = await addAddressFx({
                url: '/addresses/add',
                userId: user.userId.toString(),
                city: city,
                street: street,
                house: house,
                apartment: apartment
            })
            
        } catch (error) {
            
        }
    }

    const loadAddresses = async() => {
        try {
            const data = await getAddressesFx(`/addresses/${user.userId}`);
            setDeliveryAddress(data)
        } catch (error) {
            console.error((error as Error).message)
        }
    } 
    

    return(
        <div className={styles.order}>
            {addresses.length>0 ?
                <ul>
                    {addresses.map(item=>(
                        <AddressItem props={item}/>
                    ))}
                </ul>
                :
                []
            }
            {/* <input type="text" ref={cityRef} /> */}
            <Input placeholder={"Город"} id={"city"} onChange={setCity}/>
            <Input placeholder={"Улица"} id={"street"} onChange={setStreet}/>
            <Input placeholder={"Дом"} id={"house"} onChange={setHouse}/>
            <Input placeholder={"Квартира/Офис"} id={"apartment"} onChange={setApartment}/>
            <Button btnWidth={"100%"} text={"Добавить новый адрес"} onClick={addAddress}/>
        </div>
    )
}