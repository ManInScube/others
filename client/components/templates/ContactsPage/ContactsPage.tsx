import ContactsItem from '@/components/modules/ContactsPage/ContactsItem'
import styles from '@/styles/contacts-page/index.module.scss'


const ContactsPage = () =>{

    return(
        <div className="container">
            <div className={styles.contactsPage}>
                <div className={styles.contactsPage__title}>
                    <h2>Контакты</h2>
                </div>
                <div className={styles.contactsPage__item}>
                    <ContactsItem title={'Магазин others'}
                        address='Столешников пер., 2, Москва, 125009'
                        phone={'+7 987 654 32 10'}
                        email={'others@mail.com'}
                    />
                </div>
                <div className={styles.contactsPage__item}>
                    <ContactsItem title={'Магазин others'}
                        address='Столешников пер., 2, Москва, 125009'
                        phone={'+7 987 654 32 10'}
                        email={'others@mail.com'}
                    />
                </div>
            </div>
        </div>
    )
}

export default ContactsPage