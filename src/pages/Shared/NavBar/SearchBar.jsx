import { Link } from "react-router-dom";

const SearchBar = () => {
  return (
    <div className="border-b border-b-gray-100">
      <div className=" navbar bg-base-100 max-w-7xl mx-auto ">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            My Shops
          </Link>
          <div className="flex w-1/2 mx-auto">
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

        <div className="flex-none">
          <Link
            to="/login"
            className="px-2 py-1 border-[1px] hover:bg-gray-950 hover:text-white rounded-md text-xl font-semibold"
          >
            Login
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
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow z-50"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52  z-50"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
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
