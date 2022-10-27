import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import CardDetails from "../Pages/CardDetails/CardDetails";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Courses from "../Pages/Courses/Courses";
import Error from "../Pages/Error/Error";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

import Profile from "../Pages/Profile/Profile";


import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";



export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: ()=> fetch(`https://e-root-learning-server.vercel.app/categoris`)
                
            },
            {
                path: '/course/:id',
                element: <CardDetails></CardDetails>,
                loader: ({params})=> fetch(`https://e-root-learning-server.vercel.app/course/${params.id}`)


            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({params})=> fetch(`https://e-root-learning-server.vercel.app/course/${params.id}`)
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }
           
        ]
    }
])