import { HeaderSlider } from '@/components/elements/Header/HeaderSlider'
import styles from '@/styles/dropdown/index.module.scss'

export const Dropdown = () =>{
    return(
        <div className={styles.dropdown}>  

            <div className={styles.dropdown__table}>
                {/* <div className={styles.dropdown__header}>
                    <div className={styles.dropdown__row}>
                        <a>Новинки</a>
                    </div>
                    <div className={styles.dropdown__row}>
                        <a>Скидки</a>
                    </div>
                    <div className={styles.dropdown__row}>
                        <a>Категории</a>
                    </div>
                </div> */}

                {/* <div className={`${styles.table__header} ${styles.table__row}`}>
                    <div className={styles.table__cell}>
                        <a>Новинки</a>
                    </div>
                    <div className={styles.table__cell}>
                        <a>Скидки</a>
                    </div>
                    <div className={styles.table__cell}>
                        <a>Категории</a>
                    </div>
                </div>

                <div className={`${styles.table__row}`}>
                    <div className={styles.table__cell}>
                        <a>Новинки</a>
                    </div>
                    <div className={styles.table__cell}>
                        <a>Скидки</a>
                    </div>
                    <div className={styles.table__cell}>
                        <a>Категории</a>
                    </div>
                </div> */}

                <div className={styles.table__col}>
                    <div className={styles.table__cell}>
                        <a>Новинки</a>
                    </div>
                </div>

                <div className={styles.table__col}>
                    <div className={styles.table__cell}>
                        <a>Скидки</a>
                    </div>
                </div>

                <div className={styles.table__col}>
                    <div className={styles.table__cell}>
                        <a>Скидки</a>
                    </div>
                    <div className={styles.table__row}>
                        <div className={styles.table__cell}>
                            <a>Список</a>
                        </div>
                        <div className={styles.table__cell}>
                            <a>Список</a>
                        </div>
                    </div>
                </div>

                
            </div>

            <div className={styles.promo}>
                <div className={styles.promo__desc}>
                    <p>00% скидки</p>
                    <p>на все товар</p>
                </div>

                <div className={styles.promo__slider}>
                    <HeaderSlider/>
                </div>
            </div>


        </div>
    )
}