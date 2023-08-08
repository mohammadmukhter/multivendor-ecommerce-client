import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import useGetAllProducts from "../../../../hooks/useGetAllProducts";

const ManageProducts = () => {
  const [productsData, isLoadingProductsData] = useGetAllProducts();
  console.log(productsData);

  if (isLoadingProductsData) {
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
          All Products{" "}
        </h2>
        <div className=" text-right w-full md:w-1/3 text-white">
          <Link to="/dashboard/addProduct">
            <button className="mx-auto md:ml-auto md:mr-4 flex items-center gap-2 bg-transparent font-bold border-[1px] border-gray-100 px-4 py-2 rounded-md hover:bg-black hover:text-gray-100 uppercase">
              <FaPlusCircle></FaPlusCircle>Add Product
            </button>
          </Link>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className=" font-bold  bg-gray-800 text-white">
            <tr>
              <th className="border-[1px] rounded-sm">#</th>
              <th className="border-[1px] rounded-sm">Photo</th>
              <th className="border-[1px] rounded-sm">Category</th>
              <th className="border-[1px] rounded-sm">Sub Category</th>
              <th className="border-[1px] rounded-sm">Product Name</th>
              <th className="border-[1px] rounded-sm">Buying Price</th>
              <th className="border-[1px] rounded-sm">Selling Price</th>
              <th className="border-[1px] rounded-sm">Available Quantity</th>
              <th className="border-[1px] rounded-sm">Rating</th>
              <th className="border-[1px] rounded-sm">Model</th>
              <th className="border-[1px] rounded-sm">Color</th>
              <th className="border-[1px] rounded-sm">Size</th>
              <th className="border-[1px] rounded-sm">Status</th>
              <th className="border-[1px] rounded-sm">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700/80">
            {productsData &&
              productsData.map((data, index) => (
                <tr key={data._id}>
                  <th className=" font-semibold border-[1px] rounded-sm">
                    {index + 1}
                  </th>
                  <td className="border-[1px] rounded-sm">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={`http://localhost:3000/uploads/products/${data.productImg[0]}`}
                        />
                      </div>
                    </div>
                  </td>
                  <td className=" font-semibold border-[1px] rounded-sm">
                    {data?.categoryId.categoryName}
                  </td>
                  <td className=" font-semibold border-[1px] rounded-sm">
                    {data?.subCategoryId.subCategoryName}
                  </td>
                  <td className=" font-semibold border-[1px] rounded-sm">
                    {data?.productName}
                  </td>
                  <td className="text-end font-semibold border-[1px] rounded-sm">
                    {data?.buyingPrice}
                  </td>
                  <td className="text-end font-semibold border-[1px] rounded-sm">
                    {data?.sellingPrice}
                  </td>
                  <td className=" font-semibold border-[1px] rounded-sm">
                    {data?.availableQuantity}
                  </td>
                  <td className=" font-semibold border-[1px] rounded-sm">
                    {data?.rating || 0}
                  </td>

                  <td className=" font-semibold border-[1px] rounded-sm">
                    {data?.model}
                  </td>
                  <td className=" font-semibold border-[1px] rounded-sm">
                    {data?.color}
                  </td>
                  <td className=" font-semibold border-[1px] rounded-sm">
                    {data?.size}
                  </td>
                  <td className=" font-semibold border-[1px] rounded-sm">
                    {data?.status}
                  </td>

                  <td className=" border-[1px] rounded-sm space-y-1">
                    <button className="btn btn-ghost btn-xs bg-gray-800 text-white">
                      update
                    </button>
                    <button className="btn btn-ghost btn-xs bg-red-600 text-white">
                      Delete
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

export default ManageProducts;
