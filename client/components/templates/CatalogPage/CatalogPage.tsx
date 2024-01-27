import { getMoreProductsFx, getProductsFx } from '@/app/api/products'
import { FilterSvg } from '@/components/elements/FilterSvg'
import { ProductCard } from '@/components/elements/ProductCard/ProductCard'
import { SortSvg } from '@/components/elements/SortSvg'
import { Sorting } from '@/components/elements/Sorting'
import { FilterCheckbox } from '@/components/modules/CatalogPage/FilterCheckbox'
import { $products, setMore, setProducts } from '@/context/products'
import styles from '@/styles/catalog/index.module.scss'
import { cloth } from '@/types/catalog'
import { useUnit } from 'effector-react'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Button } from "@/components/elements/Button";



export const CatalogPage = () =>{

    const [sortingOpened, setSortingOpened] = useState<boolean>(false);
    const [test, setTest] = useState<boolean>(false);
    const [loadCouner, setLoadCounet] = useState<number>(1);


    const products = useUnit($products)

    const loadProducts = async()=>{
        try {
            const data = await getProductsFx('/products?limit=20&offset=0')

            setProducts(data)
        } catch (error) {
            toast.error((error as Error).message)
        }
    }

    const showMore = async()=>{

        try {
            const data = await getMoreProductsFx(`/products?limit=20&offset=${1}`)
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

    useEffect(()=>{
        loadProducts()
    }, [])


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


                {
                /* <div className={styles.catalog__grid}>
                        <div className={styles.catalog__div1}>
                            <ProductCard name={'Name'} manufacturer={'Brand'} price={0} image={''}/>
                        </div>
                        <div className={styles.catalog__div2}>
                            <ProductCard name={'Name'} manufacturer={'Brand'} price={0} image={''}/>
                        </div>
                        <div className={styles.catalog__div3}>
                            <ProductCard name={'Name'} manufacturer={'Brand'} price={0} image={''}/>
                        </div>
                        <div className={styles.catalog__div4}>
                            <ProductCard name={'Name'} manufacturer={'Brand'} price={0} image={''}/>
                        </div>
                        <div className={styles.catalog__div5}>
                            <ProductCard name={'Name'} manufacturer={'Brand'} price={0} image={''}/>
                        </div>
                        <div className={styles.catalog__div6}>
                            <ProductCard name={'Name'} manufacturer={'Brand'} price={0} image={''}/>
                        </div>
                        <div className={styles.catalog__div7}>
                            <ProductCard name={'Name'} manufacturer={'Brand'} price={0} image={''}/>
                        </div>
                        <div className={styles.catalog__div8}>
                            <ProductCard name={'Name'} manufacturer={'Brand'} price={0} image={''}/>
                        </div>
                        <div className={styles.catalog__div9}>
                            <ProductCard name={'Name'} manufacturer={'Brand'} price={0} image={''}/>
                        </div>
                        <div className={styles.catalog__div10}>
                            <ProductCard name={'Name'} manufacturer={'Brand'} price={0} image={''}/>
                        </div>
                        <div className={styles.catalog__div11}>
                            <ProductCard name={'Name'} manufacturer={'Brand'} price={0} image={''}/>
                        </div>
                        <div className={styles.catalog__div12}>
                            <ProductCard name={'Name'} manufacturer={'Brand'} price={0} image={''}/>
                        </div>
                        <div className={styles.catalog__div13}>
                            <ProductCard name={'Name'} manufacturer={'Brand'} price={0} image={''}/>
                        </div>
                        <div className={styles.catalog__div14}>
                            <ProductCard name={'Name'} manufacturer={'Brand'} price={0} image={''}/>
                        </div>
                        <div className={styles.catalog__div15}>
                            <ProductCard name={'Name'} manufacturer={'Brand'} price={0} image={''}/>
                        </div>
                        <div className={styles.catalog__div16}>
                            <ProductCard name={'Name'} manufacturer={'Brand'} price={0} image={''}/>
                        </div>
                        <div className={styles.catalog__div17}>
                            <ProductCard name={'Name'} manufacturer={'Brand'} price={0} image={''}/>
                        </div>
                        <div className={styles.catalog__div18}>
                            <ProductCard name={'Name'} manufacturer={'Brand'} price={0} image={''}/>
                        </div>
                        <div className={styles.catalog__div19}>
                            <ProductCard name={'Name'} manufacturer={'Brand'} price={0} image={''}/>
                        </div>

                    </div> */
                }

                <div className={styles.catalog__content}>
                    <div className={styles.catalog__filters}>
  
                        <FilterCheckbox name={'Одежда'} checkBoxList={cloth} />
                        <FilterCheckbox name={'Верхняя одежда'} checkBoxList={cloth} />


                    </div>
                    <ul className={styles.catalog__grid}>
                        {products.rows?.length ? (
                        products.rows.map((item)=>(
                        <li className={styles.catalog__div}>
                            <ProductCard key={item.id} name={item.name} manufacturer={item.manufacturer} price={item.price} image={JSON.parse(item.images)}/>
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
            </section>
        </div>

    )
}