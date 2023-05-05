import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import SignUp from "../Pages/Register/SignUp/SignUp";
import LogIn from "../Pages/Register/LogIn/LogIn";
import PrivateRoute from "./PrivateRoute";
import Error from "../Pages/Shared/Error/Error";
import ConceptDetails from "../Pages/CoreConcepts/ConceptDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/about",
            element: <About></About>
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
        {
          path: "/concept-details/:id",
          loader: async({params})=> await fetch(`https://react-station-server.vercel.app/core-concepts/${params.id}`),
          element: <PrivateRoute><ConceptDetails></ConceptDetails></PrivateRoute>
        }
      ],
    },
    {
      path: "*",
      element: <Error></Error>
    }
  ]);

export default router;
