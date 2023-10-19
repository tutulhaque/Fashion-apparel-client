import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './Component/Root';
import Home from './Pages/Home/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import AuthProvider from './Component/Providers/AuthProvider';
import PrivateRoutes from './routes/PrivateRoutes';
import Error from './Pages/Error';

// Import the ToastContainer and its CSS
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddBrand from './Component/Brand/AddBrand';
import AddProduct from './Component/Product/AddProduct';
// import Products from './Component/Product/ProductsByBrand';
import Product from './Component/Product/Product';
import ProductsByBrand from './Component/Product/ProductsByBrand';
import MyCart from './Pages/MyCart';
import UpdateProduct from './Component/Product/UpdateProduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://fashion-store-server-eight.vercel.app/brands'),

      },
      {
        path: "/register",
        element: <Register></Register>,

      },
      {
        path: "/login",
        element: <Login></Login>,

      },
      {
        path: "/add-brand",
        element: <PrivateRoutes><AddBrand></AddBrand></PrivateRoutes>,

      },
      {
        path: "/add-product",
        element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>,

      },
      {
        path: "brand/:brandName",
        element: <PrivateRoutes><ProductsByBrand /></PrivateRoutes>, 
        loader: () => fetch('https://fashion-store-server-eight.vercel.app/products'), // Load data for all products
      },
      {
        path: "/product/:id",
        element: <PrivateRoutes><Product></Product></PrivateRoutes>,
        loader: ({params})=>fetch(`https://fashion-store-server-eight.vercel.app/product/${params.id}`)


      },
      {
        path: "/update-product/:id",
        element: <PrivateRoutes><UpdateProduct></UpdateProduct></PrivateRoutes>,
        loader: ({params})=>fetch(`https://fashion-store-server-eight.vercel.app/product/${params.id}`)
      },
      {
        path: "/my-cart",
        element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>,

      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <ToastContainer position="top-right" autoClose={3000} />
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
