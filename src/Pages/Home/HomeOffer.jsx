import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomeImg from '../../assets/home-1.jpg';
import HomeImg1 from '../../assets/home-2.jpg';
import { Link } from 'react-router-dom';
const HomeOffer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in',
      offset: 200,
    });
  }, []);
  return (
    // <div className="my-20">
    //     <h1 className="text-4xl text-center">HomeOffer</h1>
    //     <div className="my-6 md:my-10 lg:my-12">
    //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    //             <div data-aos="fade-in" data-aos-delay="100" className="w-full p-2">
    //                 <img
    //                     alt="HomeOffer"
    //                     className="block h-full w-full rounded-lg object-cover object-center"
    //                     src="https://i.ibb.co/84MQpqj/HomeOffer-1.jpg"
    //                 />
    //             </div>
    //             <div data-aos="fade-in" data-aos-delay="200" className="w-full p-2">
    //                 <img
    //                     alt="HomeOffer"
    //                     className="block h-full w-full rounded-lg object-cover object-center"
    //                     src="https://i.ibb.co/PCpyMYS/HomeOffer-2.jpg"
    //                 />
    //             </div>
    //             <div data-aos="fade-in" data-aos-delay="300" className="w-full p-2">
    //                 <img
    //                     alt="HomeOffer"
    //                     className="block h-full w-full rounded-lg object-cover object-center"
    //                     src="https://i.ibb.co/wY4VG34/HomeOffer-3.jpg"
    //                 />
    //             </div>
    //             <div data-aos="fade-in" data-aos-delay="300" className="w-full p-2">
    //                 <img
    //                     alt="HomeOffer"
    //                     className="block h-full w-full rounded-lg object-cover object-center"
    //                     src="https://i.ibb.co/9377c6b/HomeOffer-4.jpg"
    //                 />
    //             </div>
    //             <div data-aos="fade-in" data-aos-delay="200" className="w-full p-2">
    //                 <img
    //                     alt="HomeOffer"
    //                     className="block h-full w-full rounded-lg object-cover object-center"
    //                     src="https://i.ibb.co/28fsGgD/HomeOffer-5.jpg"
    //                 />
    //             </div>
    //             <div data-aos="fade-in" data-aos-delay="100" className="w-full p-2">
    //                 <img
    //                     alt="HomeOffer"
    //                     className="block h-full w-full rounded-lg object-cover object-center"
    //                     src="https://i.ibb.co/khYzPGZ/HomeOffer-6.jpg"
    //                 />
    //             </div>
    //         </div>
    //     </div>
    // </div>
    <div className="hero min-h-screen bg-base-200 my-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={HomeImg} className="max-w-sm rounded-lg shadow-2xl" />
        <img src={HomeImg1} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Hot Offer!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <Link to={'/'}><button className="btn btn-neutral">Shop Now</button></Link>
        </div>
      </div>
    </div>

  );
};

export default HomeOffer;