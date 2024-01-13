import { HeaderSlider } from '@/components/elements/Header/HeaderSlider'
import { ProductCard } from '@/components/elements/ProductCard/ProductCard'
import { IProduct, IProducts } from '@/types/products'
import { useEffect, useState } from 'react'
import { getBestsellersOrNewFx } from '@/app/api/products'
import { toast } from 'react-toastify'
import { ProductsSlider } from '@/components/modules/HomePage/ProductsSlider'
import { CategoryOption } from '@/components/elements/CategoryOption/CategoryOption'
import styles from '@/styles/home/index.module.scss'
import { CapsuleSlider } from '@/components/modules/HomePage/CapsuleSlider'
import testImgCat from '@/public/images/CategoriesImage.png'
import testImgCapsule from '@/public/images/CapsuleImage.png'
import testImgAbout from '@/public/images/AboutImage.png'




export const HomePage = () =>{
    const [newProducts, setNewProducts] = useState<IProducts>({} as IProducts);
    const [bestsellers, setBestsellers] = useState<IProducts>({} as IProducts);

    useEffect(()=>{
        loadProducts();
    }, [])

    const loadProducts = async() =>{
        try{        
            const bestsellers = await getBestsellersOrNewFx('/products/bestsellers')
            const newProducts = await getBestsellersOrNewFx('/products/new')
            setBestsellers(bestsellers)
            setNewProducts(newProducts)
        }
        catch(error){
            toast.error((error as Error).message)
        }
    }

    return(
        <div className={styles.home}>
            <div className='container'>
                {/* <HeaderSlider/> */}
                {/* <ProductCard/> */}
                <div className={styles.categories}>
                    <ul className={styles.categories__list}>
                        <li>
                            <CategoryOption name='Новинки'/>
                        </li>
                        <li>
                            <CategoryOption name='Хиты'/>
                        </li>
                        <li>
                            <CategoryOption name='Одежда'/>
                        </li>
                        <li>
                            <CategoryOption name='Головные уборы'/>
                        </li>
                        <li>
                            <CategoryOption name='Аксессуары'/>
                        </li>
                        <li>
                            <CategoryOption name='Товары для дома'/>
                        </li>
                        <li>
                            <CategoryOption name='Бренды'/>
                        </li>
                    </ul>
                    <div className={styles.categories__image}>
                        <img src={testImgCat.src} alt="" />
                    </div>
                </div>

                <div className={styles.home__slider}>

                    <CategoryOption title='Новинки'/>
                    <ProductsSlider items={newProducts.rows || []} spinner={false}/>

                </div>

                <div className={styles.home__slider}>

                    <CategoryOption title='Хиты'/>
                    <ProductsSlider items={bestsellers.rows || []} spinner={false}/>

                </div>

                <div className={styles.home__capsule}>

                <CategoryOption title='Капсулы в Measure'/>

                    <div className={styles.capsule}>
                        <div className={styles.capsule__image}>
                            <img src={testImgCapsule.src} alt="" />
                        </div>
                        <div className={styles.capsule__slider}>
                            <CapsuleSlider/>
                        </div>
                        
                    </div>
                </div>

                <div className={styles.home__about}>
                    <CategoryOption title='О нас'/>
                    <div className={styles.about__image}>
                        <img src={testImgAbout.src} alt="" />
                    </div>
                    <div className={styles.about__text}>
                        <div>
                            <p>С другой стороны начало повседневной работы по формированию позиции способствует подготовки и реализации новых предложений. Повседневная практика показывает, что </p>
                        </div>
                        <div>
                            <p>С другой стороны начало повседневной работы по формированию позиции способствует подготовки и реализации новых предложений. Повседневная практика показывает, что </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}