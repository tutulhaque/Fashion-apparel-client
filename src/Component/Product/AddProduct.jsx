import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const navigate = useNavigate();
    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const photo = form.photo.value;
        const newProduct = { name, brand, type, price, description, rating, photo }
        console.log(newProduct);
        fetch('https://fashion-store-server-eight.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
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
                      navigate('/');
                }

            })


    }


    return (
        <div>
            <div className="max-w-7xl mx-auto bg-[#f7f7f7] p-10">
                <h1 className="text-4xl font-extrabold">Add Product</h1>
                <form onSubmit={handleAddProduct}>
                    {/* Row-one */}
                    <div className="flex gap-3 my-3">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="input-group">
                                <input required type="text" name="name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <select name="brand" className="select w-full">
                                <option disabled selected>Pick your favorite Brand</option>
                                <option value="Adidas">Adidas</option>
                                <option value="Nike">Nike</option>
                                <option value="Puma">Puma</option>
                                <option value="Recbok">Recbok</option>
                                <option value="Bata">Bata</option>
                                <option value="Fila">Fila</option>
                            </select>
                        </div>
                    </div>
                    {/* Row-two */}
                    <div className="flex gap-3 my-3">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <label className="input-group">
                                <input required type="text" name="type" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input required type="text" name="price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* Row-three */}
                    <div className="flex gap-3 my-3">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <label className="input-group">
                                <input required type="text" name="description" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                <input  required type="text" name="rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* Row-four */}
                    <div className="my-3">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                < require type="text" name="photo" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <input type="submit" value="Add Product" className="btn btn-neutral" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddProduct;