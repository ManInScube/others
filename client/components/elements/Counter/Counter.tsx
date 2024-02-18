import { updateCartItemFx } from "@/app/api/shopping-cart";
import { updateCartItemCount } from "@/context/shopping-cart";
import { ICounter } from "@/types/shopping-cart"
import { useEffect, useState } from "react"

const Counter = ({
    totalCount,
    productId,
    increasePrice,
    decreasePrice,
    initialCount,
    className
}:ICounter) =>{

    const [count, setCount] = useState<number>(initialCount);
    const [disableMinus, setDisableMinus] = useState<boolean>(false);
    const [disablePlus, setDisablePlus] = useState<boolean>(false);

    useEffect(()=>{
        if(count===1){
            setDisableMinus(true)
        }
        else{
            setDisableMinus(false)
        }
        if(count===totalCount){
            setDisablePlus(true)
        }
    }, [count, totalCount])

    //oprimize
    const increase = async () =>{
        try {
            increasePrice()
            setDisablePlus(false)
            setCount(count+1)
    
            const data = await updateCartItemFx({
                url: `/shopping-cart/count/${productId}`,
                payload: {count: count + 1}
            })
    
            updateCartItemCount({productId, count: data.count})
        } catch (error) {
            
        }
    }

    const decrease = async () =>{
        try {
            decreasePrice()
            setDisablePlus(false)
            setCount(count-1)
    
            const data = await updateCartItemFx({
                url: `/shopping-cart/count/${productId}`,
                payload: {count: count - 1}
            })
    
            updateCartItemCount({productId, count: data.count})
        } catch (error) {
            
        }
    }


    return(
        <div className={className}>
            <button disabled={disableMinus} onClick={decrease}>-</button>
            <span>{count}</span>
            <button disabled={disablePlus} onClick={increase}>+</button>
         </div>
    )
} 

export default Counter