import styles from '@/styles/dropdown-container/index.module.scss'
import { ReactNode } from 'react';


interface IDropdownContainerProps{
    content: ReactNode;
}

export const DropdownContainer = ({content}:IDropdownContainerProps) =>{
    return(
        <div className={styles.dropdownContainer}>
            <div className={styles.dropdownContainer__content}>
            {content}

            </div>
        </div>
    )
}