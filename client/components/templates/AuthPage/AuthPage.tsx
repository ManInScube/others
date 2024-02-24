import { SignInForm } from "@/components/modules/AuthPage/SignInForm"
import { SignUpForm } from "@/components/modules/AuthPage/SignUpForm"
import { useState } from "react"
import styles from '@/styles/auth/index.module.scss'
import { useRedirectByUserCheck } from "@/hooks/useRedirectByUserCheck"


export const AuthPage = () =>{
    const[register, setRegister] = useState<boolean>(false)

    return(
        //сделать вмето пропсов по ширину контейнера ???
        // <div className={styles.container}>
            <div className={styles.auth__content}> 
                {/*TODO: to separate component */}
                <a className={styles.auth__close}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_662_47359)">
                        <path d="M26.6666 3.44922L15.9999 14.1159L5.33327 3.44922L3.44727 5.33455L14.1146 16.0012L3.44727 26.6679L5.33327 28.5532L15.9999 17.8865L26.6666 28.5532L28.5519 26.6679L17.8853 16.0012L28.5519 5.33455L26.6666 3.44922Z" fill="#4F4F4F"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_662_47359">
                        <rect width="32" height="32" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </a>

                <div className={styles.auth__tabs}>
                    <a className={`${styles.auth__tab} ${styles.auth__tableft} ${!register ? styles.auth__tab_active : "ds"}`} onClick={()=>setRegister(false)}>
                        ВХОД
                    </a>
                    <a className={`${styles.auth__tab} ${styles.auth__tabright} ${register ? styles.auth__tab_active : "ds"}`} onClick={()=>setRegister(true)}>
                        РЕГИСТРАЦИЯ
                    </a>
                </div>
                {
                    register ? <SignUpForm/> : <SignInForm/>
                }
                

            </div>
//        </div>
    )




}