import { FaCartPlus } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  const product = location.state.product;
  return (
    <div className="hero py-12 bg-black/10 text-gray-800">
      <div className="px-12 gap-8 flex flex-col lg:flex-row">
        <img src={product.img} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h2 className="text-xl">Product Info</h2>
          <h1 className="text-5xl font-bold">{product.name}</h1>
          <div className="space-y-1 my-6">
            <table className="">
              <tbody>
                <tr>
                  <td className="w-2/12">Price</td>
                  <td className="w-10/12">{product.price}</td>
                </tr>
                <tr>
                  <td className="w-2/12">available</td>
                  <td className="w-10/12"> {product.available_quantity}</td>
                </tr>
                <tr>
                  <td className="w-2/12">Seller</td>
                  <td className="w-10/12"> {product.vendor_name}</td>
                </tr>
                <tr>
                  <td className="w-2/12">Rating</td>
                  <td className="w-10/12"> {product.rating}</td>
                </tr>
                <tr>
                  <td className="w-2/12">Details</td>
                  <td className="w-10/12"> {product.details}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="px-3 py-1 rounded-md border-[1px] border-black hover:bg-black/90 hover:text-white uppercase font-semibold flex items-center gap-2">
            <FaCartPlus></FaCartPlus> add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
