import { Link } from "react-router-dom";
import useGetAllProducts from "../../../hooks/useGetAllProducts";
import ProductCard from "./ProductCard";

const Products = ({ limit }) => {
  const [productsData, isLoadingProductsData] = useGetAllProducts();

  if (isLoadingProductsData) {
    return (
      <div className="w-full mt-24 flex items-center justify-center">
        <span className="loading loading-ring loading-lg"></span>
        <span className="loading loading-ring loading-lg"></span>
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  let data;
  if (limit) {
    data = productsData.slice(0, limit);
  } else {
    data = [...productsData];
  }

  return (
    <div className="shadow-[2px_3px_3px_3px_rgba(0,199,100,0.05)] bg-white px-4 py-8 my-12 rounded-md">
      <div className="text-xl mb-4 flex justify-between">
        <h2>products</h2>
        {limit ? (
          <Link
            to="/allProducts"
            className="bg-transparent border-[1px] rounded-md  text-gray-900 px-3 py-1 uppercase font-semibold hover:bg-gray-900 hover:text-white"
          >
            show more
          </Link>
        ) : (
          ""
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 ">
        {data.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
