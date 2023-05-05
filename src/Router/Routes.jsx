import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import SignUp from "../Pages/Register/SignUp/SignUp";
import LogIn from "../Pages/Register/LogIn/LogIn";
import PrivateRoute from "./PrivateRoute";
import Error from "../Pages/Shared/Error/Error";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <PrivateRoute><Home></Home></PrivateRoute>
        },
        {
            path: "/about",
            element: <PrivateRoute><About></About></PrivateRoute>
        },
        {
            path: "/contact",
            element: <Contact></Contact>
        },
        {
            path: "/signup",
            element: <SignUp></SignUp>
        },
        {
            path: "/login",
            element: <LogIn></LogIn>
        },
      ],
    },
    {
      path: "*",
      element: <Error></Error>
    }
  ]);

export default router;
