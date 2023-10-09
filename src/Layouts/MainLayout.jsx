import { Outlet, useNavigation } from "react-router-dom";
import MainNavbar from "../Components/Navbar/MainNavbar";
import Footer from "../Components/Footer/Footer";
import Skeleton from "../Components/LoadingAnimation/Skeleton";
import AnimatedCursor from "react-animated-cursor";

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

      <AnimatedCursor
        innerSize={12}
        outerSize={38}
        outerScale={1.3}
        outerAlpha={0.2}
        showSystemCursor={true}
        color="255, 195, 15"
        outerStyle={{
          border: "3px solid #ffc30f",
          background: "transparent"
        }}
      />
    </>
  );
};

export default MainLayout;
