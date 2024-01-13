import { Logo } from '@/components/elements/Logo'
import { ClientsFooterList } from './ClientsFooterList'
import { AboutFooterList } from './AboutFooterList'
import styles from '@/styles/footer/index.module.scss'


export const Footer = () => {
    
    return(        

        <div className={styles.container}>
            <footer className={styles.footer}>
                <div className={styles.footerCol}>
                    <a className={styles.footerCol__title}>Клиентам</a>
                    {/* <div className={styles.footerCol__list}>
                        <a>Вопросы и ответы</a>
                        <a>Оплата</a>
                        <a>Доставка</a>
                        <a>Условия возврата</a>
                    </div> */}
                    <ClientsFooterList/>
                </div>
                <div className={styles.footerCol}>
                    <a className={styles.footerCol__title}>О нас</a>
                    {/* <div className={styles.footerCol__list}>
                        <a>Вопросы и ответы</a>
                        <a>Оплата</a>
                        <a>Доставка</a>
                        <a>Условия возврата</a>
                    </div> */}
                    <AboutFooterList/>
                </div>

                <div className={styles.footerCol}>
                    <a className={styles.footerCol__title}>Телефон в Москве</a>
                    <div className={`${styles.footerCol__list} ${styles.footerCol__contact}`}>
                        <a href='tel:+79261037974'>+79261037974</a>
                    </div>

                    <a className={styles.footerCol__title}>Телефон в Махачкале</a>
                    <div className={`${styles.footerCol__list} ${styles.footerCol__contact}`}>
                        <a href='tel:+79634143457'>+79634143457</a>
                    </div>
                </div>

                <div className={styles.footer__right}>
                    <Logo/>
                    <p>Ⓒ 2024 OTHERS Все права защищены</p>
                </div>
            </footer>
        </div>

    )
}