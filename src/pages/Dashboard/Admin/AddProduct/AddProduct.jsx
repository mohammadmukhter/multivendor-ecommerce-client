import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaPlusCircle } from "react-icons/fa";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useGetAllCategories from "../../../../hooks/useGetAllCategories";
import useUser from "../../../../hooks/useUser";

const AddProduct = () => {
  const { userData } = useUser();
  const [categoriesData] = useGetAllCategories();
  const [selectedCategoryId, setSelectedCategoryId] = useState({});
  const [subCategoriesData, setSubCategoriesData] = useState([]);
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    const fetcher = async () => {
      if (selectedCategoryId.categoryId) {
        const result = await axiosSecure.get(
          `/subCategories/${selectedCategoryId?.categoryId || ""}`
        );
        setSubCategoriesData(result.data);
      } else {
        setSubCategoriesData([]);
      }
    };
    fetcher();
  }, [selectedCategoryId, axiosSecure]);

  const handleCategoryChange = (event) => {
    const categoryId = event.target.value;
    const categoryText = event.target.options[event.target.selectedIndex].text;
    console.log("Value:", categoryId);
    console.log("Text:", categoryText);

    setSelectedCategoryId({ categoryId, categoryText });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { vendorEmail: userData.email },
  });

  const onSubmit = (data) => {
    console.log("hello");
    console.log(data);
  };

  return (
    <div className="mb-12 mx-4">
      <div className="card  w-full shadow-2xl bg-gray-200/30">
        <h2 className=" bg-gray-800 py-4 text-gray-100 rounded-t-xl text-3xl font-bold mt-6 text-center">
          Add a Product to store
        </h2>
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Name*</span>
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

          <div className="flex gap-4">
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text">Category Name*</span>
              </label>
              <select
                {...register("categoryId", { required: true, minLength: 2 })}
                className="input input-bordered"
                onChange={handleCategoryChange}
                value={selectedCategoryId.categoryId}
              >
                {selectedCategoryId?.categoryId ? (
                  <option value={selectedCategoryId?.categoryId}>
                    {selectedCategoryId?.categoryText}
                  </option>
                ) : (
                  <option value="">Select Category</option>
                )}
                {categoriesData.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.categoryName}
                  </option>
                ))}
              </select>
              {errors.categoryId && (
                <span className="text-red-600 text-left text-sm w-64 mt-1">
                  Category Name is required
                </span>
              )}
            </div>
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text">Sub Category Name*</span>
              </label>
              <select
                {...register("subCategoryId", { required: true, minLength: 2 })}
                className="input input-bordered"
              >
                <option value="">Select Sub Category</option>
                {subCategoriesData.map((subCategory) => (
                  <option key={subCategory._id} value={subCategory._id}>
                    {subCategory.subCategoryName}
                  </option>
                ))}
              </select>
              {errors.subCategoryId && (
                <span className="text-red-600 text-left text-sm w-64 mt-1">
                  Sub Category Name is required
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row  gap-4">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Vendor Email*</span>
              </label>
              <input
                type="email"
                placeholder="Vendor Email"
                {...register("vendorEmail", { required: true })}
                className="input input-bordered"
                disabled
              />
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Available Quantity*</span>
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
                <span className="label-text">Model</span>
              </label>
              <input
                type="text"
                placeholder="model"
                {...register("model", { required: true })}
                className="input input-bordered"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text">Buying Price*</span>
              </label>
              <input
                type="text"
                placeholder="Buying Price"
                {...register("buyingPrice", { required: true })}
                className="input input-bordered"
              />
              {errors.buyingPrice && (
                <span className="text-red-600 text-left text-sm w-64 mt-1">
                  Buying Price is required
                </span>
              )}
            </div>
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text">Selling Price*</span>
              </label>
              <input
                type="text"
                placeholder="Selling Price"
                {...register("sellingPrice", { required: true })}
                className="input input-bordered"
              />
              {errors.sellingPrice && (
                <span className="text-red-600 text-left text-sm w-64 mt-1">
                  Selling Price is required
                </span>
              )}
            </div>
          </div>

          <div className="flex gap-4">
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text">Color</span>
              </label>
              <input
                type="text"
                placeholder="Color"
                {...register("color", { required: true })}
                className="input input-bordered"
              />
            </div>
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text">Size</span>
              </label>
              <select
                {...register("size", { required: true })}
                className="input input-bordered"
              >
                <option value="1">Small</option>
                <option value="2">Medium</option>
                <option value="3">Large</option>
              </select>
            </div>
          </div>

          <div className="w-full">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Details*</span>
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
              <span className="label-text">Image*</span>
            </label>
            <input
              type="file"
              placeholder="Product Image"
              {...register("productImg", { required: true })}
              className="file-input file-input-bordered w-full"
              multiple
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
