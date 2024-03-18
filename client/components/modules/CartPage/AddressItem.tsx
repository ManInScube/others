import { IDeliveryItem } from "@/types/order"
import styles from '@/styles/address-item/index.module.scss'

interface IAddressItemProps{
    city: string
    street: string
    house: string
    apartment: string

}

const AddressItem = ({props}: {props:IDeliveryItem}) =>{
    return(
        <li className={styles.address}>
            <p>{props.city},<br/>{props.street}, {props.house}, {props.apartment}</p>
        </li>
    )
}

export default AddressItem