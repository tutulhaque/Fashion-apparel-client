
const AddBrand = () => {
    const handleAddBrand = event => {
       event.preventDefault();
       const form = event.target;
       const name = form.name.value;
       const photo = form.photo.value;
       const newBrand = {name,photo}
       console.log(newBrand);
       fetch('https://fashion-store-server-eight.vercel.app/brands',{
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBrand)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId)
            {
                alert('Success')
            }

        })
    }

    return (
        <div className="max-w-7xl mx-auto h-96 p-20">
            <h1 className="text-4xl font-extrabold">Add Brand</h1>
            <form onSubmit={handleAddBrand}>
                {/* Row-01 */}
                <div className="flex gap-3 my-4">
                    <div className="form-control w-full">
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" name="name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
               
                {/* Row-02 */}
                <div className="my-3">
                    <div className="form-control w-full">
                        <label className="input-group">
                            <span>PhotoURL</span>
                            <input type="text" name="photo" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Brand" className="btn btn-block" />
            </form>
        </div>
    );
};

export default AddBrand;