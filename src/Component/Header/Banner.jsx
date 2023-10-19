import HomeBanner from '../../assets/banner-home.png';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Banner = () => {

    // Define the style object for the background image
    const backgroundImageStyle = {
        backgroundImage: `url(${HomeBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in',
            offset: 200, // Animation starts as soon as the element is in the viewport
        });
    }, []);

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/tsgF5yd/banner-home.png)' }}>
            <div className=""></div>
            <div className="hero-content text-center text-neutral-content">
            </div>
        </div>
    );
};

export default Banner;