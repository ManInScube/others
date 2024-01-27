import { Button } from "@/components/elements/Button"

export const ProfileAuth = () =>{
    return(
        <>
            <p>вы не вошли в личный кабинет</p>
            <div>
                <Button btnWidth={570} text='ВОЙТИ' />
                <Button btnWidth={570} text='ЗАРЕГЕСТРИРОВАТЬСЯ' />
            </div>
        </>
    )
}