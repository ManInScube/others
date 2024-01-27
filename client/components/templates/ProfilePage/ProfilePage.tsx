import { CategoryOption } from '@/components/elements/CategoryOption/CategoryOption'
import { ProfileAuth } from '@/components/modules/ProfilePage/ProfileAuth'
import { $user } from '@/context/user'
import { useRedirectByUserCheck } from '@/hooks/useRedirectByUserCheck'
import styles from '@/styles/profile/index.module.scss'
import { useUnit } from 'effector-react'


export const ProfilePage = () =>{

   // const {} = useRedirectByUserCheck(true)
    const user = useUnit($user);

    return(
        <div className={styles.profile}>
            <div className={styles.profile__menu}>
                <ul>
                    <li>
                        <CategoryOption name='мой профиль'/>
                    </li>
                    <li>
                        <CategoryOption name='мои заказы'/>
                    </li>
                    <li>
                        <CategoryOption name='мои адреса'/>
                    </li>
                </ul>

                <ul>
                    <li>
                        <CategoryOption name='вопросы и ответы'/>
                    </li>
                    <li>
                        <CategoryOption name='оплата'/>
                    </li>
                    <li>
                        <CategoryOption name='доставка'/>
                    </li>
                    <li>
                        <CategoryOption name='условия возврата'/>
                    </li>
                </ul>
            </div>

            <div className={styles.content}>
                {/* {
                    shouldLoadContent ?
                    <h1>Вы залогинены</h1> :
                    <ProfileAuth/>
                } */}
                <p>{user.name}</p>
                <p>{user.lastname}</p>
            </div> 
        </div>
    )
}