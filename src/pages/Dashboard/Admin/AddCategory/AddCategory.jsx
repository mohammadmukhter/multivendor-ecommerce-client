import { useForm } from "react-hook-form";
import { FaPlusCircle } from "react-icons/fa";

const AddCategory = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="mb-12 mx-3 w-3/4 ">
      <div className="card  w-full shadow-2xl bg-gray-200/30">
        <h2 className=" bg-gray-800 py-4 text-gray-100 rounded-t-xl text-3xl font-bold mt-6 text-center">
          Add a Category
        </h2>
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category Name</span>
            </label>
            <input
              type="text"
              placeholder="Category Name"
              {...register("categoryName", { required: true })}
              className="input input-bordered"
            />
            {errors.categoryName && (
              <span className="text-red-600 text-left text-sm w-64 mt-1">
                Category Name is required
              </span>
            )}
          </div>

          <div className="form-control mt-6 w-fit ml-auto">
            <button className="w-full flex items-center gap-2 bg-gray-300  font-bold border-[1px] border-gray-700 px-4 py-2 rounded-md hover:bg-black hover:text-gray-100 uppercase">
              <FaPlusCircle></FaPlusCircle>Add Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
