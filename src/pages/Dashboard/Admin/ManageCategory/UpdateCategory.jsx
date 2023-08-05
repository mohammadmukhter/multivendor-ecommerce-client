import { useForm } from "react-hook-form";
import { FaPenSquare } from "react-icons/fa";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
const UpdateCategory = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [axiosSecure] = useAxiosSecure();
  let { categoryName } = { ...location?.state };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const dataUpdated = await axiosSecure.patch(`/categories/${id}`, data);
      if (dataUpdated.data.updated) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Category updated Successfully!",
          showConfirmButton: true,
          timer: 1500,
        });
        reset();
        navigate("/dashboard/manageCategory");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2 className=" bg-gray-800 py-4 text-gray-100 rounded-t-xl text-3xl font-bold mt-6 text-center">
        Update a Category
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
            defaultValue={categoryName}
            className="input input-bordered"
          />
          {errors.categoryName && (
            <span className="text-red-600 text-left text-sm w-64 mt-1">
              Category Name is required
            </span>
          )}
        </div>

        <div className="modal-action">
          <button className="w-auto flex items-center gap-2 bg-gray-300  font-bold border-[1px] border-gray-700 px-4 py-2 rounded-md hover:bg-black hover:text-gray-100 uppercase">
            <FaPenSquare></FaPenSquare>Update Category
          </button>

          <Link
            to="/dashboard/manageCategory"
            className="w-auto flex items-center gap-2 bg-gray-300  font-bold border-[1px] border-gray-700 px-4 py-2 rounded-md hover:bg-black hover:text-gray-100 uppercase hover:cursor-pointer"
          >
            Back to Manage Category!
          </Link>
        </div>
      </form>
    </div>
  );
};

export default UpdateCategory;
