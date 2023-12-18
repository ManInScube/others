import styles from '@/styles/modal/index.module.scss'
import { ReactNode } from 'react';

 interface IProps{
    childred: ReactNode;
}

export const Modal: React.FC<IProps> = ({ childred})=>{
    return(
        <div className={styles.modal}>
            {childred}
        </div>
    )
}