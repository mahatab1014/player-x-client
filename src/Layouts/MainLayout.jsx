import { Outlet, useNavigation } from "react-router-dom";
import MainNavbar from "../Components/Navbar/MainNavbar";
import Footer from "../Components/Footer/Footer";
import Skeleton from "../Components/LoadingAnimation/Skeleton";

const MainLayout = () => {
  const navigation = useNavigation();
  return (
    <>
      <header className="shadow-xl shadow-[#8e87e629]">
        <MainNavbar />
      </header>

      <main>{navigation.state === "loading" ? <Skeleton /> : <Outlet />}</main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
