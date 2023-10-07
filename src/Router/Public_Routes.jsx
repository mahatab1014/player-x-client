import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Service from "../Pages/Services/Service";
import GameDetails from "../Pages/GameDetails/GameDetails";

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
        element: <Service />,
        loader: () => fetch("/data/services.json"),
      },
      {
        path: "/game/:id",
        element: <GameDetails />,
        loader: () => fetch("/data/game.json"),
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default Public_Routes;