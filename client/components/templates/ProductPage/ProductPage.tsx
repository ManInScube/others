import ProductSlider from '@/components/modules/ProductPage/ProductSlider';
import { $product } from '@/context/product';
import { useUnit } from 'effector-react';
import ProductImagesList from '../../modules/ProductPage/ProductImagesList';
import Accordion from '@/components/elements/Accordion/Accordion';
import { Button } from '@/components/elements/Button/Button';
import { toggleCartItem } from '@/utils/shopping-cart';
import { $user } from '@/context/user';
import { useRedirectByUserCheck } from '@/hooks/useRedirectByUserCheck';
import { CategoryOption } from '@/components/elements/CategoryOption/CategoryOption';
import { useEffect } from 'react';
import { getProductsFx } from '@/app/api/products';
import { $similarProducts, $viewedProducts, setSimilarProducts } from '@/context/products';
import { ProductsSlider } from '@/components/modules/HomePage/ProductsSlider';
import styles from '@/styles/product-page/index.module.scss'

const ProductPage = () =>{
    const {shouldLoadContent} = useRedirectByUserCheck(false)
    const product = useUnit($product);
    const user = useUnit($user);
    const images = product.images ? JSON.parse(product.images) : []
    const similar = useUnit($similarProducts);
    const viewed = useUnit($viewedProducts);


    const addToCart = () =>{
        toggleCartItem(user.email, product.id);
    }

    useEffect(()=>{
        getSimilarProducts()
    }, [product.type])

    const getSimilarProducts = async () =>{
        try {
            const encodedTypeQuery = encodeURIComponent(JSON.stringify(product.type))
            const data = await getProductsFx(`/products?limit=18&offset=0&type=${encodedTypeQuery}`)
            setSimilarProducts(data);
        } catch (error) {
            console.error((error as Error).message)
        }
    }

    const addToViewed = async() =>{
        //add to viewed
    }

    return(
        <section>
            <div className="container">
                <div className={styles.product__main}>
                    <div className={styles.product__slider}>
                        {/* <ProductSlider images={images}/> */}
                        {/* mainImage and images?? */}
                        <ProductImagesList images={images}/>
                    </div>
                    <div className={styles.product__col}>
                        <div className={styles.product__info}>
                            <p className={styles.product__title}>{product.name}</p>
                            <span className={styles.product__brand}>{product.manufacturer}</span>
                            {/* colors->array */}
                            {/* sizes->array */}

                            <span className={styles.product__price}>{product.price} ₽</span>
                            <Button btnWidth={'75%'} text={'Добавить в корзину'} onClick={addToCart}/>
                        </div>

                        <div className={styles.product__accordions}>
                            <Accordion children={product.description} title={'о товаре'}/>
                            {/* <Accordion children={product.description} title={'Обмеры'}/> */}
                            <Accordion children={product.description} title={'доставка и возврат'}/>
                        </div>
                    </div>
                </div>

                <div className={styles.product__offers}>
                    <CategoryOption name='Все платья из вискозы Measure' size='2em'/>
                    <CategoryOption name='Все платья из вискозы' size='2em'/>
                    <CategoryOption name='Все товары Measure' size='2em'/>
                </div>

                <div className={styles.product__carousel}>
                    <CategoryOption title='Похожие'/>
                    <ProductsSlider items={ similar.rows || []} spinner={false}/>
                </div>

                 <div className={styles.product__carousel}>
                    <CategoryOption title='Недавно просмотренные'/>
                    <ProductsSlider items={ viewed.rows || []} spinner={false}/>
                </div> 
            </div>
        </section>
    )
}

export default ProductPage