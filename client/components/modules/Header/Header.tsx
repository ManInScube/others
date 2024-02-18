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
    //const {shouldLoadAuth} = useRedirectByUserCheck()
    //const {shouldLoadContent} = useRedirectByUserCheck()

    function toggleDropdown(){
        setOpen(!open);
    }

    function toggleAuth(){
        // if(shouldLoadContent){
        //     setProfileLink('/profile')
        //     return
        // }
        // if(shouldLoadContent){
        //     setAuthOpen(!authOpen)
        // }
        setAuthOpen(!authOpen)
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
                

                    
                
                    <UserIcon handler={toggleAuth}/>
            
                 
                    <FavouriteIcon/>
                    <div>
                        <CartIcon/>
                        {/* <span>(0)</span> */}
                    </div>
                </div>

            </div>


            {open && <Dropdown/>}
            {searchOpen && <DropdownContainer content={<SearchInput/>}/> }
            {authOpen && <Modal childred={<AuthPage/>} />}

        </header>
    )
}