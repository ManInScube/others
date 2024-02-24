import Slider from "react-slick";
import styles from '@/styles/productPage-slider/index.module.scss'
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";


interface IProductSliderProps{
    images: string[]
}

const ProductSlider = ({images}: {images: string[]}) =>{

    useEffect(()=>{
        // const sliders = document.querySelectorAll(`.${styles.productSlider}`);
        // const container = document.querySelector('.slick-slider') as HTMLElement;
        const dots = document.querySelector('.slick-dots') as HTMLElement;

        // container.style.display = 'flex'; 
        // container.style.flexDirection ='row';
        //dots.style.width = '100px';
       //dots.style.height = '100px';

        // sliders.forEach((slider)=>{
        //     const list = slider.querySelector('.slick-dots') as HTMLElement;

        // })

        // for(const child of dots.children){
        //     child.style.width = '100px';
        // }
       
    }, [])


    const settings = {
        customPaging: function(i:number) {
            return (
              <a  className={styles.dot}>
                {/* <img src={`/abstract0${i + 1}.jpg`} /> */}
                <img src={images[i]} />
                <img src={images[i]} />

                {/* <img src={images[i]} /> */}

              </a>
              
              
            );
          },
        dotsClass: styles.dot,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false,
        arrows: true,
        swipeToSlide: true
        //nextArrow: <SampleNextArrow/>,
        //prevArrow: <SamplePrevArrow/>,
      };
    
    return(
        <Slider {...settings}
         className={styles.productSlider}
         >


            
            {/* {images.map((src,i)=>(
                <div>
                    <img src={src} alt={`image-${i+1}`} />
                </div>
            ))} */}

                <div>
                    <img src={images[0]}  />
                </div>
                <div>
                    <img src={images[0]}  />
                </div>
    
        </Slider>
    )
}

export default ProductSlider