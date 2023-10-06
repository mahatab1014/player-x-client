import { Outlet } from "react-router-dom";
import MainNavbar from "../Components/Navbar/MainNavbar";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <header className="shadow-xl shadow-[#8e87e629]">
        <MainNavbar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
