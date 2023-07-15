import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layouts/Dashboard/Dashboard";
import Main from "../layouts/Main/Main";
import AddProduct from "../pages/Dashboard/Admin/AddProduct/AddProduct";
import AdminHome from "../pages/Dashboard/Admin/AdminHome/AdminHome";
import ManageProducts from "../pages/Dashboard/Admin/ManageProducts/ManageProducts";
import ManageVendors from "../pages/Dashboard/Admin/ManageVendors/ManageVendors";
import ManageUsers from "../pages/Dashboard/Admin/Manageusers/ManageUsers";
import Home from "../pages/Home/Home/Home";
import ProductDetails from "../pages/Home/ProductDetails/ProductDetails";
import Login from "../pages/Login/Login";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import Register from "../pages/Register/Register";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "productDetails",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "allProducts",
        element: <ProductsPage></ProductsPage>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "adminHome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "manageProducts",
        element: <ManageProducts></ManageProducts>,
      },
      {
        path: "manageUsers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "manageVendors",
        element: <ManageVendors></ManageVendors>,
      },
    ],
  },
]);

export default routes;
