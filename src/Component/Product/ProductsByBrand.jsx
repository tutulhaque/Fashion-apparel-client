import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HomeBanner2 from '../../assets/b-2.jpg';
import HomeBanner1 from '../../assets/b-1.jpg';
import HomeBanner3 from '../../assets/b-3.jpg';

//Carousel
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProductsByBrand = () => {
  const { brandName } = useParams();
  const [brandProducts, setBrandProducts] = useState([]);

  useEffect(() => {
    const fetchProductsByBrand = async () => {
      try {
        const response = await fetch(`https://fashion-store-server-eight.vercel.app/products`);
        const data = await response.json();
        const filteredProducts = data.filter(product => product.brand === brandName);
        setBrandProducts(filteredProducts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductsByBrand();
  }, [brandName]);

  // Slider css

  return (
    <>
      <Carousel>
        <div>
          <img src={HomeBanner1} />
        </div>
        <div>
          <img src={HomeBanner2} />
        </div>
        <div>
          <img src={HomeBanner3} />
        </div>
      </Carousel>

      <div className='max-w-7xl mx-auto my-20'>
        <h1 className='text-5xl my-5'>Products by {brandName}</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
          {brandProducts.map((product) => (
            <div key={product._id} className="card card-compact w-96 mx-auto bg-base-100 shadow-xl">
              <figure><img className='' src={product.photo} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <div className='flex gap-3 text-red-400'>
                <h2 className="card-title">${product.price}</h2>
                <h2 className="card-title">Brand: {product.brand}</h2>
                </div>
                <div className='flex gap-3'>
                <h2 className="card-title">Type: {product.type}</h2>
                <h2 className="card-title text-orange-400">Rating: {product.rating}*</h2>
                </div>
                <p>{product.description.slice(0,100)}....</p>
                <div className="card-actions justify-start my-4">
                  <Link to={`/product/${product._id}`}><button className="btn btn-neutral">Details</button></Link>
                  <Link to={`/update-product/${product._id}`}><button className="btn btn-accent">Update</button></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsByBrand;
