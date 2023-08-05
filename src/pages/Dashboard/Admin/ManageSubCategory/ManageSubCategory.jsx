import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import useGetAllSubCategories from "../../../../hooks/useGetAllSubCategories";

const ManageSubCategory = () => {
  const [subCategoriesData, isLoadingSubCategories] = useGetAllSubCategories();

  if (isLoadingSubCategories) {
    return (
      <div className="w-full mt-24 flex items-center justify-center">
        <span className="loading loading-ring loading-lg"></span>
        <span className="loading loading-ring loading-lg"></span>
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="w-full px-4">
      <div className=" bg-gray-800 py-4 flex flex-col md:flex-row justify-start md:justify-center items-center rounded-t-md">
        <div className=" w-full md:w-1/3"></div>
        <h2 className="text-center w-full md:w-1/3 text-2xl font-bold uppercase rounded-t-md text-white">
          All Sub Categories{" "}
        </h2>
        <div className=" text-right w-full md:w-1/3 text-white">
          <Link to="/dashboard/addSubCategory">
            <button className="mx-auto md:ml-auto md:mr-4 flex items-center gap-2 bg-transparent font-bold border-[1px] border-gray-100 px-4 py-2 rounded-md hover:bg-black hover:text-gray-100 uppercase">
              <FaPlusCircle></FaPlusCircle>Add a Sub Category
            </button>
          </Link>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className=" font-bold  bg-gray-800 text-white">
            <tr>
              <th className="border-[1px] rounded-sm">#</th>
              <th className="border-[1px] rounded-sm">Sub Category Name</th>
              <th className="border-[1px] rounded-sm">Category Name</th>
              <th className="border-[1px] rounded-sm">Status</th>
              <th className="border-[1px] rounded-sm w-3/12">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700/80">
            {subCategoriesData.map((subCategory, index) => (
              <tr key={subCategory._id}>
                <th className=" font-semibold border-[1px] rounded-sm">
                  {index + 1}
                </th>
                <td className=" font-semibold border-[1px] rounded-sm">
                  {subCategory.subCategoryName}
                </td>
                <td className=" font-semibold border-[1px] rounded-sm">
                  {subCategory.categoryId?.categoryName}
                </td>
                <td className="text-end font-semibold border-[1px] rounded-sm">
                  {subCategory.status}
                </td>

                <td className=" border-[1px] rounded-sm space-y-1">
                  <Link
                    to={`/dashboard/updateSubCategory/${subCategory._id}`}
                    state={{ subCategory: subCategory }}
                    className="btn btn-ghost btn-sm w-full bg-gray-800 text-white"
                  >
                    update
                  </Link>
                  <button className="btn btn-ghost btn-sm w-full bg-red-600 text-white">
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

export default ManageSubCategory;
