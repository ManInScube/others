import { Button } from '@/components/elements/Button/Button'
import styles from '@/styles/not-found/index.module.scss'
import Link from 'next/link'

const Custom404 = () =>{
    return(
        <div className={styles.notFound}>
            <div className={styles.notFound__container}>
                <p>404</p>
                <span>Страница не найдена(</span>

                <Link href='/'>
                    <Button btnWidth={'100%'} text={'Вернуться на главную'}/>
                </Link>
            </div>

        </div>
    )
}

export default Custom404