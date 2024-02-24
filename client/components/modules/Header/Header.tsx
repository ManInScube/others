import { CartIcon } from '@/components/elements/CartIcon/CartIcon'
import { FavouriteIcon } from '@/components/elements/FavouriteIcon/FavouriteIcon'
import { SearchIcon } from '@/components/elements/SearchIcon'
import { UserIcon } from '@/components/elements/UserIcon'
import { Logo } from '@/components/elements/Logo/Logo'
import Link from 'next/link'
import { useState } from 'react'
import { Dropdown } from './Dropdown'
import styles from '@/styles/header/index.module.scss'
import { SearchInput } from '@/components/elements/Header/SearchInput'
import { DropdownContainer } from '@/components/elements/Header/DropdownContainer'
import { Modal } from '@/components/layout/Modal'
import { AuthPage } from '@/components/templates/AuthPage/AuthPage'
import { useRedirectByUserCheck } from '@/hooks/useRedirectByUserCheck'


export const Header = () =>{
    const [open, setOpen] = useState<boolean>(false)
    const [searchOpen, setSearchOpen] = useState<boolean>(false)
    const [authOpen, setAuthOpen] = useState<boolean>(false)
    const [profileLink, setProfileLink] = useState<string>('')
    const {shouldLoadContent} = useRedirectByUserCheck()


    function toggleDropdown(){
        setOpen(!open);
    }

    return(
        <header> 
            <div className={styles.header}> 

                <nav className={styles.nav}>
                    <Link href="/" legacyBehavior >
                        <Logo/>
                    </Link>
                    <Link href="/cloth" legacyBehavior>
                        <a>одежда</a>
                    </Link>
                    <Link href="/headwear" legacyBehavior>
                        <a>головные уборы</a>
                    </Link>
                    <Link href="/accessories" legacyBehavior>
                        <a>акссессура</a>
                    </Link>
                    <Link href="/home" legacyBehavior>
                        <a>товары для дома</a>
                    </Link>
                    <Link href="/brands" legacyBehavior>
                        <a>бренды</a>
                    </Link>
                </nav>

                <div className={styles.header__right}>
                    <SearchIcon/>    
                    <Link 
                    //href={shouldLoadContent ? '/auth' : '/profile'} 
                    href="/auth"
                    legacyBehavior
                    >   
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="34" viewBox="0 0 32 34" fill="none">
                            <path d="M22.0648 18.4766C24.4532 16.6491 25.9998 13.7782 25.9998 10.5391C25.9998 5.01656 21.5223 0.539062 15.9998 0.539062C10.4773 0.539062 5.99984 5.01656 5.99984 10.5391C5.99984 13.7782 7.5465 16.6491 9.93484 18.4766C4.19984 20.9816 0.166504 26.9266 0.166504 33.8724H31.8332C31.8332 26.9266 27.7998 20.9816 22.0648 18.4766ZM9.33317 10.5391C9.33317 6.86323 12.324 3.8724 15.9998 3.8724C19.6757 3.8724 22.6665 6.86323 22.6665 10.5391C22.6665 14.2149 19.6757 17.2057 15.9998 17.2057C12.324 17.2057 9.33317 14.2149 9.33317 10.5391ZM15.9998 20.5391C21.814 20.5391 26.7132 24.7949 28.104 30.5391H3.89567C5.2865 24.7949 10.1857 20.5391 15.9998 20.5391Z" fill="#F8F4F1"/>
                        </svg>
                    </a>

                    </Link>

                    <Link href="/favourites" legacyBehavior>
                        <FavouriteIcon/>
                    </Link>
                    <Link href="/cart" legacyBehavior>
                        <a>
                            <CartIcon/>
                        </a>
                    </Link>
                    
                </div>
            </div>


            {open && <Dropdown/>}
            {searchOpen && <DropdownContainer content={<SearchInput/>}/> }
            {authOpen && <Modal childred={<AuthPage/>} />}

        </header>
    )
}