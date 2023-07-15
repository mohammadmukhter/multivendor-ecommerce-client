import { useForm } from "react-hook-form";
import { FaPlusCircle } from "react-icons/fa";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="mb-12 mx-4">
      <div className="card  w-full shadow-2xl bg-gray-200/30">
        <h2 className=" bg-gray-800 py-4 text-gray-100 rounded-t-xl text-3xl font-bold mt-6 text-center">
          Add a Product
        </h2>
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              placeholder="Product Name"
              {...register("productName", { required: true })}
              className="input input-bordered"
            />
            {errors.productName && (
              <span className="text-red-600 text-left text-sm w-64 mt-1">
                Product Name is required
              </span>
            )}
          </div>

          <div className="flex flex-col md:flex-row  gap-4">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Vendor Name</span>
              </label>
              <input
                type="text"
                placeholder="Vendor Name"
                {...register("vendorName", { required: true })}
                className="input input-bordered"
              />
              {errors.vendorName && (
                <span className="text-red-600 text-left text-sm w-64 mt-1">
                  Vendor Name is required
                </span>
              )}
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <input
                type="text"
                placeholder="Available Quantity"
                {...register("availableQuantity", { required: true })}
                className="input input-bordered"
              />
              {errors.availableQuantity && (
                <span className="text-red-600 text-left text-sm w-64 mt-1">
                  Quantity is required
                </span>
              )}
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder="price"
                {...register("price", { required: true })}
                className="input input-bordered"
              />
              {errors.price && (
                <span className="text-red-600 text-left text-sm w-64 mt-1">
                  price is required
                </span>
              )}
            </div>
          </div>

          <div className="w-full">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24"
                {...register("details", { required: true })}
                placeholder="Details"
              ></textarea>
              {errors.details && (
                <span className="text-red-600 text-left text-sm">
                  Details is required
                </span>
              )}
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="file"
              placeholder="Product Image"
              {...register("productImg", { required: true })}
              className="file-input file-input-bordered w-full"
            />
            {errors.productImg && (
              <span className="text-red-600 text-left text-sm w-64 mt-1">
                Product Image is required
              </span>
            )}
          </div>

          <div className="form-control mt-6 w-fit ml-auto">
            <button className="w-full flex items-center gap-2 bg-gray-300  font-bold border-[1px] border-gray-700 px-4 py-2 rounded-md hover:bg-black hover:text-gray-100 uppercase">
              <FaPlusCircle></FaPlusCircle>Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
