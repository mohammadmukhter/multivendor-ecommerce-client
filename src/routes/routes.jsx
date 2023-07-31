import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layouts/Dashboard/Dashboard";
import Main from "../layouts/Main/Main";
import AddCategory from "../pages/Dashboard/Admin/AddCategory/AddCategory";
import AddProduct from "../pages/Dashboard/Admin/AddProduct/AddProduct";
import AddSubCategory from "../pages/Dashboard/Admin/AddSubCategory/AddSubCategory";
import AdminHome from "../pages/Dashboard/Admin/AdminHome/AdminHome";
import ManageCategory from "../pages/Dashboard/Admin/ManageCategory/ManageCategory";
import ManageProducts from "../pages/Dashboard/Admin/ManageProducts/ManageProducts";
import ManageSubCategory from "../pages/Dashboard/Admin/ManageSubCategory/ManageSubCategory";
import ManageVendors from "../pages/Dashboard/Admin/ManageVendors/ManageVendors";
import ManageUsers from "../pages/Dashboard/Admin/Manageusers/ManageUsers";
import Home from "../pages/Home/Home/Home";
import ProductDetails from "../pages/Home/ProductDetails/ProductDetails";
import Login from "../pages/Login/Login";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

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
    element: (
      <PrivateRoute>
        {" "}
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "adminHome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "addCategory",
        element: <AddCategory></AddCategory>,
      },
      {
        path: "manageCategory",
        element: <ManageCategory></ManageCategory>,
      },
      {
        path: "addSubCategory",
        element: <AddSubCategory></AddSubCategory>,
      },
      {
        path: "manageSubCategory",
        element: <ManageSubCategory></ManageSubCategory>,
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
