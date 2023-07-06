import { Outlet } from "react-router-dom";
import Footer from "../../pages/Shared/Footer/Footer";
import NavBar from "../../pages/Shared/NavBar/NavBar";

const Main = () => {
  return (
    <div className=" bg-orange-50/50">
      <NavBar></NavBar>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
