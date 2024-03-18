import styles from '@/styles/contacts-item/index.module.scss'

interface IContactsItemProps{
    title: string
    address?: string
    phone: string
    email: string
}

const ContactsItem = ({title, address, phone, email}: IContactsItemProps) =>{

    return(
        <div className={styles.item}>
            <p className={styles.item__title}>{title}</p>
            {address&&<p className={styles.item__row}><span>Адрес: </span>{address}</p>}
            <p className={styles.item__row}><span>Телефон: </span>{phone}</p>
            <p className={styles.item__row}><span>Email: </span>{email}</p>
        </div>
    )
}

export default ContactsItem