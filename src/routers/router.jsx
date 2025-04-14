import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop"
import About from "../components/About";
import Blog from "../components/Blog";
import Book from "../components/Book"
import BookData from "../shop/BookData";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook"
import ManageBooks from "../dashboard/ManageBooks"
import EditBooks from "../dashboard/EditBooks"
import SignUp from "../components/SignUp"
import Login from "../components/Login"
import PrivateRoute from "../PrivateRouting/PrivateRoute";
import Logout from "../components/Logout";
 
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/shop',
                element: <Shop />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/book',
                element: <Book />
            },
            {
                path: "/book/:id",
                element: <BookData />,
                loader: ({params}) => fetch(`https://mybookstore-backend-x6z7.onrender.com/book/${params.id}`)
            }
        ]
    },
    {
        path: "/admin/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: "/admin/dashboard",
                element: <PrivateRoute><Dashboard/></PrivateRoute>
                // element: <Dashboard/>
            },
            {
                path: "/admin/dashboard/upload",
                element: <UploadBook />
            },
            {
                path: "/admin/dashboard/manage",
                element: <ManageBooks />
            },
            {
                path: "/admin/dashboard/edit-books/:id",
                element: <EditBooks />,
                loader: ({params}) => fetch(`https://mybookstore-backend-x6z7.onrender.com/book/${params.id}`)
            },
        ]
    },
    {
        path: "sign-up",
        element: <SignUp />
    },
    {
        path: "login",
        element: <Login />
    },
    {
        path: "logout",
        element: <Logout />
    }
])
export default router;