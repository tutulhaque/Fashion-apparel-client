import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const BrandTypes = ({ brandLoadedData }) => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in',
            offset: 200, // Animation starts as soon as the element is in the viewport
        });
    }, []);
    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-5xl text-center font-bold py-8'>Our Brands</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:justify-between'>
                {
                    brandLoadedData.map(brand=> 
                    <Link key={brand._id} to={`brand/${brand.name}`}><div data-aos="zoom-in" className="card card-compact  mx-auto shadow-2xl">
                    <figure><img className='w-48 mx-auto' src={brand.photo} alt="Shoes" /></figure>
                    <hr />
                    <div className="card-body">
                        <h2 className="card-title text-2xl justify-center">{brand.name}</h2>
                        {/* <div className="card-actions justify-start py-4">
                            <Link to={`brand/${brand.name}`}><button className=" btn-sm btn-neutral">More</button></Link>
                        </div> */}
                    </div>
                </div>
                </Link>)
                
                }
            </div>
        </div>
    );
};

export default BrandTypes;