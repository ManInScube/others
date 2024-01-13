import { ProductCard } from "@/components/elements/ProductCard/ProductCard";
import { IProduct, IProducts } from "@/types/products";
import Slider from "react-slick"
import styles from '@/styles/product-slider/index.module.scss'
import testImg from '@/public/images/promo.png'
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import { formatPrice } from "@/utils/common";
import { useEffect } from "react";


interface IProductsSliderProps{
    items: IProduct[]
    spinner: boolean
}

export const ProductsSlider = ({items, spinner}: IProductsSliderProps) =>{

useEffect(()=>{
    const sliders = document.querySelectorAll(`.${styles.productSlider}`);

    sliders.forEach((slider)=>{
        const list = slider.querySelector('.slick-list') as HTMLElement;
        list.style.marginRight = '-100px'; //TODO: Adaptive calc
    })
   
}, [])

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: false,
    arrows: false,
  };

return(
    <Slider {...settings} className={styles.productSlider}>

        {items && (
            items.map((item)=>(
                    <div className={styles.productSlider__slide}>
                        <ProductCard name={item.name} manufacturer={item.manufacturer} price={item.price} image={item.images} />
                    </div>
                ))
            )
        }

    </Slider>
)
}