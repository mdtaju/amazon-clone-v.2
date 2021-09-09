import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BannerOne from '../../public/electronics-banner.jpg';
import BannerTwo from '../../public/product-banner.jpg';
import BannerThree from '../../public/beautiy-banner.jpg';
import Image from 'next/image';

const Banner = () => {
    return (
        <div className='relative'>
            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={4000}
            >
                <div>
                    <Image src={BannerOne} alt='First-Banner'/>
                </div>
                <div>
                    <Image src={BannerTwo} alt='Second-Banner'/>
                </div>
                <div>
                    <Image src={BannerThree} alt='Third-Banner'/>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;