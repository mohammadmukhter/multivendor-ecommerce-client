import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="card card-compact w-full bg-white text-gray-700 border-[1px] border-gray-100 rounded-md shadow-sm flex justify-between text-center md:text-left  ">
      <div>
        <figure className="p-4">
          <img
            className="rounded-md h-36 w-auto md:w-full"
            src={product.img}
            alt=""
          />
        </figure>
        <div className="px-4 pb-2 flex flex-col">
          <h2 className="font-bold text-xl ">{product.name}</h2>
          <div className="">
            <p>Price: {product.price}</p>
            <p>Available: {product.available_quantity}</p>
          </div>
        </div>
      </div>

      <div className="md:m-4 mt-0 flex gap-2 mx-auto mb-4">
        <Link
          to="/productDetails"
          state={{ product }}
          className="px-3 py-1 rounded-md border-[1px] border-black hover:bg-black/90 hover:text-white uppercase font-semibold text-md"
        >
          Details
        </Link>
        <button
          onClick={() => console.log("hello")}
          className="px-3 py-1 rounded-md border-[1px] border-black hover:bg-black/90 hover:text-white uppercase font-semibold"
        >
          <FaCartPlus></FaCartPlus>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
