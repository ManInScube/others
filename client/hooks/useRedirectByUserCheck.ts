import { checkUserAuthFx } from "@/app/api/auth";
import { setUser } from "@/context/user";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react"

export const useRedirectByUserCheck = (isProfilePage = false) =>{
    //const [shouldLoadAuth, setShouldLoadAuth] = useState<boolean>(false);
    const [shouldLoadContent, setShouldLoadContent] = useState<boolean>(false);

    const router = useRouter();
    const shouldCheckAuth = useRef(true);

    useEffect(()=>{
        if(shouldCheckAuth.current){
            shouldCheckAuth.current = false
            checkUser()
        }
    })

    // const checkUser = async() =>{
    //     const user = await checkUserAuthFx('/users/login-check')

    //     if(isAuthPage){
    //         if(!user){
    //             setShouldLoadContent(true)
    //             return
    //         }

    //        router.push('/profile')
    //         return
    //     }

    //     if(user){
    //         setUser(user)
    //         setShouldLoadContent(true)
    //         return
    //     }

    //     //router.push('/')
    // }

    // const checkUser = async() =>{
    //     const user = await checkUserAuthFx('/users/login-check')

    //     if(isProfilePage){
    //         if(!user){
    //             router.push('/')
    //             return
    //         }
    //     }

    //     if(user){
    //         setUser(user)
    //         router.push('/profile')
    //         return
    //     }

    //     if(!user){
    //         setShouldLoadAuth(true)
    //         return
    //     }
    // }


        const checkUser = async() =>{
            const user = await checkUserAuthFx('/users/login-check')

            if(isProfilePage){
                if(!user){
                    router.push('/')
                    //setShouldLoadContent(false)
                    return
                }

            //router.push('/profile')
              //  return
            }

            if(!user){
                setShouldLoadContent(true)
                return
            }

            if(user){
                setUser(user)
               // setShouldLoadContent(true)
                return
            }

            return {shouldLoadContent}
        }
}
