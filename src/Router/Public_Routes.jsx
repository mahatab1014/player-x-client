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
            element: <SignIn />,
          },
          {
            path: "/auth/signup",
            element: <SignUp />,
          },
        ],
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default Public_Routes;
