import { useForm } from "react-hook-form";
import { FaPlusCircle } from "react-icons/fa";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useGetAllCategories from "../../../../hooks/useGetAllCategories";

const UpdateSubCategory = () => {
  const [categoriesData] = useGetAllCategories();
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [axiosSecure] = useAxiosSecure();
  let { subCategory } = { ...location?.state };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const dataUpdated = await axiosSecure.patch(`/subCategories/${id}`, data);
      if (dataUpdated.data.updated) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Category updated Successfully!",
          showConfirmButton: true,
          timer: 1500,
        });
        reset();
        navigate("/dashboard/manageSubCategory");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="mb-12 mx-3 w-3/4 ">
      <div className="card  w-full shadow-2xl bg-gray-200/30">
        <h2 className=" bg-gray-800 py-4 text-gray-100 rounded-t-xl text-3xl font-bold mt-6 text-center">
          Update a Sub Category
        </h2>
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Sub Category Name</span>
            </label>
            <input
              type="text"
              placeholder="Sub Category Name"
              {...register("subCategoryName", { required: true })}
              className="input input-bordered"
              defaultValue={subCategory.subCategoryName || ""}
            />
            {errors.subCategoryName && (
              <span className="text-red-600 text-left text-sm w-64 mt-1">
                Sub Category Name is required
              </span>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Category Name</span>
            </label>
            <select
              {...register("categoryId", { required: true, minLength: 2 })}
              className="input input-bordered"
            >
              <option value={subCategory.categoryId?._id}>
                {subCategory.categoryId?.categoryName}
              </option>
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

          <div className="form-control mt-6 w-fit ml-auto">
            <button className="w-full flex items-center gap-2 bg-gray-300  font-bold border-[1px] border-gray-700 px-4 py-2 rounded-md hover:bg-black hover:text-gray-100 uppercase">
              <FaPlusCircle></FaPlusCircle>Update Sub Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateSubCategory;
