import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Allproduct from "../pages/AllProducts/Allproduct";
import AllProducts from "../pages/AllProducts/AllProducts";
import Blog from "../pages/Blog/Blog";
import AllCategory from "../pages/Category/AllCategory";
import Categories from "../pages/Category/Categories";
import AddCategory from "../pages/DashBoard/AddCategory/AddCategory";
import AddProduct from "../pages/DashBoard/AddProduct/AddProduct";
import AllBuyer from "../pages/DashBoard/AllBuyer/AllBuyer";
import AllSeller from "../pages/DashBoard/AllSeller/AllSeller";
import MyOrders from "../pages/DashBoard/MyOrders/MyOrders";
import MyProducts from "../pages/DashBoard/MyProducts/MyProducts";
import Payment from "../pages/DashBoard/Payment/Payment";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Product from "../pages/Products/Product";
import Products from "../pages/Products/Products";
import SignUp from "../pages/Sign Up/SignUp";
import AdminRoute from "./AdminRoute";
import BuyersRoute from "./BuyersRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/categories',
                element: <AllCategory></AllCategory>
            },
            {
                path: '/product',
                element: <Allproduct></Allproduct>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`https://resale-product-server.vercel.app/category/${params.id}`),
                element: <PrivateRoute> <Products></Products></PrivateRoute>
            }


        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,

        children: [
            {
                path: '/dashboard/allseller',
                element: <AllSeller></AllSeller>
            },
            {
                path: '/dashboard/allbuyer',
                element: <AllBuyer></AllBuyer>
            },

            {
                path: '/dashboard/orders',
                element: <BuyersRoute><MyOrders></MyOrders></BuyersRoute>
            },
            {
                path: '/dashboard/addproduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/myproduct',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/addcategory',
                element: <SellerRoute><AddCategory></AddCategory></SellerRoute>
            },


            {

                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://resale-product-server.vercel.app/bookings/${params.id}`)
            },

        ]

    },
    {

        path: '*',
        element: <ErrorPage></ErrorPage>

    }
])