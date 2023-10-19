import { Navigate, useLoaderData } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {
    const singleProduct = useLoaderData();
    const { _id, name, brand, type, price, description, rating, photo } = singleProduct;
    const navigate = useNavigate();
    const handleUpdateProduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const photo = form.photo.value;
        const updatedProduct = {name, brand, type, price, description, rating, photo}
        console.log(updatedProduct)
        fetch(`https://fashion-store-server-eight.vercel.app/product/${_id}`,{
            method:'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0)
            {
                Swal.fire({
                    title: 'Success!',
                    text: 'Product Updated Successfully.',
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
            <form onSubmit={handleUpdateProduct}>
                {/* Row-01 */}
                <div className="flex gap-3 my-3">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <select name="brand" className="select w-full" defaultValue={brand}>
                            <option disabled selected>Select your brand</option>
                            <option value="Adidas">Adidas</option>
                            <option value="Nike">Nike</option>
                            <option value="Puma">Puma</option>
                            <option value="Recbok">Recbok</option>
                            <option value="Bata">Bata</option>
                            <option value="Fila">Fila</option>
                        </select>
                    </div>
                </div>
                {/* Row-02 */}
                <div className="flex gap-3 my-3">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="type" defaultValue={type} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={price} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* Row-03 */}
                <div className="flex gap-3 my-3">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" defaultValue={description} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" defaultValue={rating} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* Row-03 */}
                <div className="my-3">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" defaultValue={photo} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="flex justify-center">
                    <input type="submit" value="Update Product" className="btn btn-neutral" />
                </div>
            </form>
        </div>

    </div>
    );
};

export default UpdateProduct;