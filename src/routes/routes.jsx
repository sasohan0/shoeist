import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Login from "../Login-Registration/Login";
import About from "../pages/About";
import Registration from "../Login-Registration/Registration";
import DashboardLayout from "../layouts/DashboardLayout";

import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AllProducts from "../pages/AllProducts";
import AddProducts from "../pages/AddProduct";
import EditProduct from "../pages/EditProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:3000/shoes"),
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/shoes/${params.id}`),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "home",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "all-products",
        element: (
          <PrivateRoute>
            <AllProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "add-products",
        element: (
          <PrivateRoute>
            <AddProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "all-products/edit/:id",
        element: (
          <PrivateRoute>
            <EditProduct />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/shoes/${params.id}`),
      },
    ],
  },
]);
