import { NextRouter } from "next/router"

export const formatPrice = (val: number) =>
    val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

    
export const idGenerator = () => {
        const S4 = () =>
            (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
        return (
            S4() +
            S4() +
            '-' +
            S4() +
            '-' +
            S4() +
            '-' +
            S4() +
            '-' +
            S4() +
            S4() +
            S4()
    )
}

export const getQueryParamOnFirstRender = (
    queryName: string,
    router: NextRouter
) => {
    router.query[queryName] ||
    router.asPath.match(new RegExp(`[&?]${queryName}=(.*)(&|$)`))
}
    