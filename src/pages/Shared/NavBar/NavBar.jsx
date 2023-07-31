import { Link } from "react-router-dom";
import useUser from "../../../hooks/useUser";
import SearchBar from "../../../pages/Shared/NavBar/SearchBar";
const NavBar = () => {
  const { userData } = useUser();

  const navList = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link to="/allProducts">All Products</Link>
      </li>
      <li>
        <Link>Orders</Link>
      </li>
      {userData ? (
        <li>
          <Link to="/dashboard/adminHome">Dashboard</Link>
        </li>
      ) : (
        ""
      )}
    </>
  );
  return (
    <div className="shadow-md bg-white text-gray-600">
      <SearchBar></SearchBar>
      <div>
        <div className="navbar bg-white p-0 max-w-7xl mx-auto">
          <div className="navbar-start ">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 uppercase text-lg font-semibold text-gray-600 z-50"
              >
                {navList}
              </ul>
            </div>
            <div className="navbar p-0 hidden lg:flex">
              <ul className="menu menu-horizontal px-1 uppercase text-lg font-semibold text-gray-600">
                {navList}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
