import { PriceRange } from "@/components/modules/CatalogPage/PriceRange"
import { FilterCheckbox } from "@/components/modules/CatalogPage/FilterCheckbox"
import { useState } from "react";
import { clothTypes } from '@/utils/catalog'
import { useUnit } from "effector-react";
import { $clothType, setClothType, setFiltereProducts, setOuterwearType, setProducts, updateClothType, updateOuterwearType } from "@/context/products";
import { IFilterProps } from "@/types/catalog";
import { Button } from "@/components/elements/Button/Button";
import { useRouter } from "next/router";
import { getProductsFx } from "@/app/api/products";
import { toast } from "react-toastify";



export const Filters = ({priceRange, setPriceRange, setIsFilterInQuery}: IFilterProps) =>{

    const clothTypes = useUnit($clothType);
    const router = useRouter();

    const applyFilters = async()=>{
        setIsFilterInQuery(true);
        try {
            const priceFrom = Math.ceil(priceRange[0])
            const priceTo = Math.ceil(priceRange[1])
            const priceQuery = `&priceFrom=${priceFrom}&priceTo${priceTo}`
            const cloth = clothTypes.filter(item=>item.checked).map(item=>item.title)
            //const outerwear = ...

            const encodedClothQuery = encodeURIComponent(JSON.stringify(cloth))
            //const encodedOuterwerQuery

            const clothQuery = `&type=${encodedClothQuery}`
            //outerwear...

            if(cloth){
                router.push({
                    query: {
                        ...router.query,
                        //outerwear
                        offset: 0,
                        priceFrom,
                        priceTo,
                        type: encodedClothQuery,

                    }
                }, undefined, {shallow:true}
                )
                const data = await getProductsFx(`/products?limit=18&offset=0${priceQuery}${clothQuery}`)
                
                setFiltereProducts(data);
                return
            }

            
        } catch (error) {
            toast.error((error as Error).message)
        }
    }

    const resetFilters = async() =>{

        try {
            const data = await getProductsFx('/products?limit=18&offset=0')

            const params = router.query
            delete params.type
            delete params.priceFrom
            delete params.priceTo

            router.push({
                query: { ...params }
                },
                undefined,
                {shallow:true}
           )
            setClothType(
                clothTypes.map((item)=>({...item, checked: false}))
            )
            // setOuterwearType(
            //     outerwearTypes.map((item)=>({...item, checked: false}))
            // )
            setProducts(data)
            setPriceRange([1700, 219000])
            
        } catch (error) {
            toast.error((error as Error).message)
        }
    }

    
    return(
        <>
            <FilterCheckbox name={'Одежда'} checkBoxList={clothTypes} setList={setClothType} updateList={updateClothType} />
            <FilterCheckbox name={'Верхняя одежда'} checkBoxList={clothTypes} setList={setOuterwearType} updateList={updateOuterwearType} />

            <PriceRange priceRange={priceRange} setPriceRange={setPriceRange} />

            <Button btnWidth={190} text="Применить" onClick={applyFilters}/>
            <Button btnWidth={190} text="Сбросить" onClick={resetFilters}/>

        </>

    )
}