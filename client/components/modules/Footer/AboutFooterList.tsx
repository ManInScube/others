import Link from "next/link"
import styles from '@/styles/footer/footer-list/index.module.scss'


export const AboutFooterList = () =>{
    return(
        <ul className={styles.footerList}>
            <li>
                <Link href="" legacyBehavior>
                    История Others
                </Link>
            </li>
            <li>
                <Link href="" legacyBehavior>
                    Контакты и магазины
                </Link>
            </li>
            <li>
                <Link href="" legacyBehavior>
                    @OTHERS
                </Link>
            </li>
            <li>
                <Link href="" legacyBehavior>
                    @OTHERS.MOSCOW
                </Link>
            </li>
        </ul>
    )
}