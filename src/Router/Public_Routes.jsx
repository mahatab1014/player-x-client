import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Service from "../Pages/Services/Service";
import GameDetails from "../Pages/GameDetails/GameDetails";
import AuthLayout from "../Layouts/AuthLayout";
import SignIn from "../Pages/Auth/SignIn";
import SignUp from "../Pages/Auth/SignUp";
import Private_Routes from "./Private_Routes";
import Shop from "../Pages/Shop/Shop";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Hide_Auth_Routes from "./Hide_Auth_Routes";
import Profile from "../Pages/Profile/Profile";
import Blog from "../Pages/Blog/Blog";
import BlogDetails from "../Pages/Blog/BlogDetails";

const Public_Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/data/services.json"),
      },
      {
        path: "/services",
        element: <Services />,
        loader: () => fetch("/data/services.json"),
      },
      {
        path: "/service/:id",
        element: (
          <Private_Routes>
            <Service />
          </Private_Routes>
        ),
        loader: () => fetch("/data/services.json"),
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/game/:id",
        element: (
          <Private_Routes>
            <GameDetails />
          </Private_Routes>
        ),
        loader: () => fetch("/data/game.json"),
      },
      {
        path: "/auth",
        element: <AuthLayout />,
        children: [
          {
            path: "/auth/signin",
            element: (
              <Hide_Auth_Routes>
                <SignIn />
              </Hide_Auth_Routes>
            ),
          },
          {
            path: "/auth/signup",
            element: (
              <Hide_Auth_Routes>
                <SignUp />
              </Hide_Auth_Routes>
            ),
          },
        ],
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/profile",
        element: (
          <Private_Routes>
            <Profile />
          </Private_Routes>
        ),
      },
      {
        path: "/blog",
        element: <Blog />,
        loader: () => fetch("/data/blog.json"),
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />,
        loader: () => fetch("/data/blog.json"),
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default Public_Routes;
