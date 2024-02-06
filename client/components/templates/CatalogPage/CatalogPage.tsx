import { getMoreProductsFx, getProductsByTypeFx, getProductsFx } from '@/app/api/products'
import { FilterSvg } from '@/components/elements/FilterSvg'
import { ProductCard } from '@/components/elements/ProductCard/ProductCard'
import { SortSvg } from '@/components/elements/SortSvg'
import { Sorting } from '@/components/elements/Sorting'
import { $clothType, $filteredProducts, $outerwearType, $products, setClothType, setMore, setOuterwearType, setProducts } from '@/context/products'
import styles from '@/styles/catalog/index.module.scss'
import { useUnit } from 'effector-react'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Button } from "@/components/elements/Button";
import { PriceRange } from '@/components/modules/CatalogPage/PriceRange'
import { Filters } from './Filters'
import { outerwearTypes } from '@/utils/catalog'
import { useRouter } from 'next/router'



export const CatalogPage = () =>{

    const [sortingOpened, setSortingOpened] = useState<boolean>(false);
    const [test, setTest] = useState<boolean>(false);
    const [loadCouner, setLoadCounet] = useState<number>(1);
    const [priceRange, setPriceRange] = useState<number[]>([1700, 219000]);

    const [isFilterInQuery, setIsFilterInQuery] = useState<boolean>(false);

    const router = useRouter();


    const products = useUnit($products)
    const clothTypes = useUnit($clothType);
    const oterwearType = useUnit($outerwearType);
    
    const filteredProducts = useUnit($filteredProducts);



    const loadProducts = async()=>{
        try {
            const data = await getProductsFx('/products?limit=18&offset=0')

            setProducts(isFilterInQuery ? filteredProducts : data)
        } catch (error) {
            toast.error((error as Error).message)
        }
    }

    const showMore = async()=>{

        try {
            const data = await getMoreProductsFx(`/products?limit=18&offset=${1}`)
            setMore(data);
            console.log(products);
           // setProducts([...products, data])
        } catch (error) {
            toast.error((error as Error).message)
        }
    }

    function openSorting(){
        setTest(true)
        setSortingOpened(!sortingOpened);
    }

    // const applyTypeFilter = async() =>{
    //     try {

    //     } catch (error) {
    //         toast.error((error as Error).message)
    //     }
    // }

    // const applyFilters = async()=>{
    //     try {
    //         const priceFrom = Math.ceil(priceRange[0])
    //         const priceTo = Math.ceil(priceRange[1])
    //         const priceQuery = `priceFrom=${priceFrom}&priceTo${priceTo}`
    //         const cloth = clothTypes.filter(item=>item.checked).map(item=>item.title)
    //         //const outerwear = ...

    //         const encodedClothQuery = encodeURIComponent(JSON.stringify(cloth))
    //         //const encodedOuterwerQuery

    //         const clothQuery = `&cloth=${encodedClothQuery}`
    //         //outerwear...

    //         if(cloth){
    //             router.push({
    //                 query: {
    //                     ...router.query,
    //                     cloth: encodedClothQuery,
    //                     //outerwear
    //                     priceFrom,
    //                     priceTo,
    //                     offset: 0
    //                 }
    //             }, undefined, {shallow:true}
    //             )
    //             const data = await getProductsFx(`/products?limit=18&offset=0${priceQuery}${clothQuery}`)

    //         }
    //     } catch (error) {
    //         toast.error((error as Error).message)
    //     }
    // }

    const resetFilters = async() =>{

        try {
            const data = await getProductsFx('/products?limit=18&offset=0')
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

    useEffect(()=>{
        loadProducts()
    }, [filteredProducts, isFilterInQuery])


    return(
        <div className='container'>
            <section className={styles.catalog}>
                <div className={styles.catalog__title}>
                    <h2>Одежда</h2>
                </div>

                <div className={styles.catalog__options}>
                    <div>
                        <a>
                            <FilterSvg/>  
                            <span>Фильтры</span>
                        </a>
                    </div>
                    <div className={styles.sorting}>
                        <a onClick={openSorting}>
                            <SortSvg/>  
                            <span>Сортировка</span>
                        </a>

                        {sortingOpened && <div className={styles.sorting__expand}>
                            <Sorting/>
                        </div>}
                    </div>
                </div>

                <div className={styles.catalog__content}>
                    <div className={styles.catalog__filters}>
                        <Filters priceRange={priceRange} setPriceRange={setPriceRange} resetHandler={resetFilters} setIsFilterInQuery={setIsFilterInQuery}/>
                    </div>
                    <ul className={styles.catalog__grid}>
                        {products.rows?.length ? (
                        products.rows.map((item)=>(
                        <li className={styles.catalog__div}>
                            <ProductCard key={item.id} name={item.name} manufacturer={item.manufacturer} price={item.price} image={JSON.parse(item.images)} />
                        </li>
                        ))
                        ): (
                            <span>Nein</span>
                        )
                        }
                    </ul>
                    

                    
                    
                </div>
                {/* <Button btnWidth={230} text={'Показать еще'} /> */}
                <a onClick={showMore}>
                    КНОПКА
                </a>
                <br />
                <br />

                {/* <a onClick={applyTypeFilter}>
                    Тест
                </a> */}
                
            </section>
        </div>

    )
}