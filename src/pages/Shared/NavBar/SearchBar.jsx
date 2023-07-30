import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/authProvider";

const SearchBar = () => {
  const { userData } = useContext(AuthContext);

  return (
    <div className="border-b border-b-gray-100 text-gray-600">
      <div className=" navbar bg-white max-w-7xl mx-auto flex flex-wrap md:flex-nowrap">
        <Link to="/" className="btn btn-ghost normal-case text-xl order-1">
          My Shops
        </Link>
        <div className="flex-1 basis-full order-3 md:order-2">
          <div className="flex w-full md:w-1/2 mx-auto">
            <div className="form-control w-full">
              <input
                type="text"
                placeholder="Search Products"
                className="input input-bordered w-full rounded-r-none focus:outline-none focus:border-gray-200 bg-slate-100"
              />
            </div>
            <button className=" px-4 rounded-lg hover:bg-gray-900 font-semibold uppercase bg-gray-800 text-white rounded-l-none border-gray-800">
              Search
            </button>
          </div>
        </div>

        <div className="flex-none gap-2 md:order-3 order-2 ml-auto">
          <Link
            to="/login"
            className="px-2 py-1 border-[1px] hover:bg-gray-950 hover:text-white rounded-md text-xl font-semibold"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-2 py-1 border-[1px] hover:bg-gray-950 hover:text-white rounded-md text-xl font-semibold"
          >
            Register
          </Link>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">{"0"}</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-white shadow z-50"
            >
              <div className="card-body">
                <span className="font-bold text-lg">{"0"} Items</span>
                <span className="text-info">Subtotal: ${"0"}</span>
                <div className="card-actions">
                  <Link
                    to="/myCartPage"
                    className="px-2 py-1 border-[1px] w-full text-center hover:bg-gray-950 hover:text-white rounded-md text-xl font-semibold"
                  >
                    View cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={userData.userImage} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52  z-50"
            >
              <li>
                <a className="justify-between">
                  {userData.name}
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
