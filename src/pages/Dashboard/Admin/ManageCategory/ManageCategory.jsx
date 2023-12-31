import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useGetAllCategories from "../../../../hooks/useGetAllCategories";

const ManageCategory = () => {
  const [categoriesData, isCategoriesLoading, refetch] = useGetAllCategories();
  const [axiosSecure] = useAxiosSecure();

  if (isCategoriesLoading) {
    return (
      <div className="w-full mt-24 flex items-center justify-center">
        <span className="loading loading-ring loading-lg"></span>
        <span className="loading loading-ring loading-lg"></span>
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  // delete a category handler function
  const deleteHandler = (categoryId) => {
    console.log(categoryId);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const deleteFunction = async () => {
          try {
            const deletedData = await axiosSecure.delete(
              `/categories/${categoryId}`
            );

            if (deletedData.data.deleted) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              refetch();
            }
          } catch (err) {
            console.log(err);
          }
        };
        deleteFunction();
      }
    });
  };

  return (
    <div className="w-full px-4">
      <div className=" bg-gray-800 py-4 flex flex-col md:flex-row justify-start md:justify-center items-center rounded-t-md">
        <div className=" w-full md:w-1/3"></div>
        <h2 className="text-center w-full md:w-1/3 text-2xl font-bold uppercase rounded-t-md text-white">
          All Categories{" "}
        </h2>
        <div className=" text-right w-full md:w-1/3 text-white">
          <Link to="/dashboard/addCategory">
            <button className="mx-auto md:ml-auto md:mr-4 flex items-center gap-2 bg-transparent font-bold border-[1px] border-gray-100 px-4 py-2 rounded-md hover:bg-black hover:text-gray-100 uppercase">
              <FaPlusCircle></FaPlusCircle>Add a Category
            </button>
          </Link>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className=" font-bold  bg-gray-800 text-white">
            <tr>
              <th className="border-[1px] rounded-sm">#</th>
              <th className="border-[1px] rounded-sm">Category Name</th>
              <th className="border-[1px] rounded-sm">Status</th>
              <th className="border-[1px] rounded-sm w-3/12">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700/80">
            {categoriesData.map((category, index) => (
              <tr key={category._id}>
                <th className=" font-semibold border-[1px] rounded-sm">
                  {index + 1}
                </th>
                <td className=" font-semibold border-[1px] rounded-sm">
                  {category.categoryName}
                </td>
                <td className="text-end font-semibold border-[1px] rounded-sm">
                  {category.status}
                </td>

                <td className=" border-[1px] rounded-sm space-y-1">
                  <Link
                    to={`/dashboard/updateCategory/${category._id}`}
                    state={{ categoryName: category.categoryName }}
                    className="btn btn-ghost btn-sm w-full bg-gray-800 text-white"
                  >
                    Update
                  </Link>

                  <button
                    onClick={() => deleteHandler(category._id)}
                    className="btn btn-ghost btn-sm w-full bg-red-600 text-white"
                  >
                    Delete
                  </button>
                  <button className="btn btn-ghost btn-sm w-full bg-green-800 text-white">
                    Change Status
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCategory;
