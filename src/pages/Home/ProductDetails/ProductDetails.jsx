import { FaCartPlus } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import addCartUtil from "../../../../utils/addCartUtil";
import useUser from "../../../hooks/useUser";

const ProductDetails = () => {
  const { userData } = useUser();
  const location = useLocation();
  const product = location.state.product;

  // add to cart handler
  const cartHandler = (productId, userEmail) => {
    const result = addCartUtil(productId, userEmail);
    console.log(result);
  };

  return (
    <div className="hero py-12 bg-black/10 text-gray-800">
      <div className="px-12 gap-8 flex flex-col lg:flex-row">
        <img
          src={`http://localhost:3000/uploads/products/${product.productImg[0]}`}
          className="w-[240px] h-[200px] rounded-lg shadow-2xl"
        />
        <div>
          <h2 className="text-xl">Product Info</h2>
          <h1 className="text-5xl font-bold">{product?.productName}</h1>
          <div className="space-y-1 my-6">
            <table className="">
              <tbody>
                <tr>
                  <td className="w-2/12">Price</td>
                  <td className="w-10/12">{product?.sellingPrice}</td>
                </tr>
                <tr>
                  <td className="w-2/12">available</td>
                  <td className="w-10/12"> {product?.availableQuantity}</td>
                </tr>
                <tr>
                  <td className="w-2/12">Seller</td>
                  <td className="w-10/12"> {product.vendorEmail}</td>
                </tr>
                <tr>
                  <td className="w-2/12">Model</td>
                  <td className="w-10/12"> {product?.model}</td>
                </tr>
                <tr>
                  <td className="w-2/12">Color</td>
                  <td className="w-10/12"> {product?.color}</td>
                </tr>
                <tr>
                  <td className="w-2/12">Size</td>
                  <td className="w-10/12"> {product?.size}</td>
                </tr>
                <tr>
                  <td className="w-2/12">Rating</td>
                  <td className="w-10/12"> {product?.rating || 0}</td>
                </tr>
                <tr>
                  <td className="w-2/12">Details</td>
                  <td className="w-10/12"> {product?.details}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button
            onClick={() => cartHandler(product._id, userData?.email)}
            className="px-3 py-1 rounded-md border-[1px] border-black hover:bg-black/90 hover:text-white uppercase font-semibold flex items-center gap-2"
          >
            <FaCartPlus></FaCartPlus> add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
