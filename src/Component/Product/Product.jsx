import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Product = () => {
    const { user } = useContext(AuthContext)
    const singleProduct = useLoaderData();
    const { name, brand, type, price, description, rating, photo } = singleProduct;
    const navigate = useNavigate();
    

    const handleAddToCart = () => {
        const SingleProductData = {
            cartId: singleProduct._id,
            cartName: singleProduct.name,
            cartBrand: singleProduct.brand,
            cartType: singleProduct.type,
            cartDescription: singleProduct.description,
            cartPrice: singleProduct.price,
            cartPhoto: singleProduct.photo,
            cartRating: singleProduct.rating,
            userEmail: user.email,
            quantity: 1,
        };

        // Make a POST request to server's
        fetch('https://fashion-store-server-eight.vercel.app/add-to-cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(SingleProductData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added To Cart Successfully.',
                        icon: 'success',
                        confirmButtonText: 'Close'
                      })
                      navigate('/my-cart');
                }

            })
    };

    return (
        <div className="mt-3">
            <div className="max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto">
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="flex-1">
                        <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
                        </div>
                        <div className="flex-1">
                            <h1 className="text-5xl font-bold">{name}</h1>
                            <h1 className="text-lg font-bold py-1">${price}</h1>
                            <h1 className="text-lg font-bold py-1">Type: {type}</h1>
                            <h1 className="text-lg font-bold py-1">Brand: {brand}</h1>
                            <h1 className="text-lg font-bold py-1">Rating: {rating}*</h1>
                            <p className="py-6">{description}</p>
                            <button onClick={handleAddToCart} className="btn btn-neutral">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        </div>
    );
};

export default Product;