import Link from "next/link"
import styles from '@/styles/footer/footer-list/index.module.scss'


export const ClientsFooterList = () =>{
    return(
        <ul className={styles.footerList}>
            <li>
                <Link href="" legacyBehavior>
                    Вопросы и ответы
                </Link>
            </li>
            <li>
                <Link href="" legacyBehavior>
                    Оплата
                </Link>
            </li>
            <li>
                <Link href="" legacyBehavior>
                    Доставка
                </Link>
            </li>
            <li>
                <Link href="" legacyBehavior>
                    Условия возврата
                </Link>
            </li>
        </ul>
    )
}