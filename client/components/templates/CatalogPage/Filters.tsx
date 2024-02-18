import { PriceRange } from "@/components/modules/CatalogPage/PriceRange"
import { FilterCheckbox } from "@/components/modules/CatalogPage/FilterCheckbox"
import { useEffect, useState } from "react";
import { clothTypes } from '@/utils/catalog'
import { useUnit } from "effector-react";
import { $clothType, setClothType, setFiltereProducts, setOuterwearType, setProducts, updateClothType, updateOuterwearType } from "@/context/products";
import { IFilterProps } from "@/types/catalog";
import { Button } from "@/components/elements/Button/Button";
import { useRouter } from "next/router";
import { getProductsFx } from "@/app/api/products";
import { toast } from "react-toastify";
import { getQueryParamOnFirstRender } from "@/utils/common";



export const Filters = ({priceRange, setPriceRange, setIsFilterInQuery}: IFilterProps) =>{

    const clothTypes = useUnit($clothType);
    const router = useRouter();

    useEffect(()=>{
        applyFiltersFromQuery();
    }, [])

    const applyFiltersFromQuery = async () =>{
        try {
            const priceFromQueryValue = getQueryParamOnFirstRender('priceFrom', router)
            const priceToQueryValue = getQueryParamOnFirstRender('priceTo', router)
            const typeQueryValue = JSON.parse(
                decodeURIComponent(
                    getQueryParamOnFirstRender('type', router) as string
                )
            )

        const isValidQuery = Array.isArray(typeQueryValue) && !!typeQueryValue?.length

        const typeQuery = `&type=${getQueryParamOnFirstRender('type', router)}`
        const priceQuery = `&priceFrom=${priceFromQueryValue}&priceTo=${priceToQueryValue}`

        } catch (error) {
            toast.error((error as Error).message)
        }        
    }

    async function updateParamsAndFilters<T>(updatedParams:T, path: string) {
        const params = router.query
        delete params.type
        delete params.priceFrom
        delete params.priceTo

     
        router.push({
            query: {
                ...params,
                ...updatedParams
            }
        }, undefined, {shallow:true}
        )
        const data = await getProductsFx(`/products?limit=18&offset=0${path}`)
            
        setFiltereProducts(data);
    }

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

           // if(cloth){
 
                updateParamsAndFilters({
                    priceFrom,
                    priceTo,
                    type: encodedClothQuery,
                }, `${priceQuery}${clothQuery}`)

                return
            //}

            
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

            <Button btnWidth={'90%'} text="Применить" onClick={applyFilters}/>
            <Button btnWidth={'90%'} text="Сбросить" onClick={resetFilters}/>

        </>

    )
}