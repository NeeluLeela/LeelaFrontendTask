import { Outlet } from "react-router-dom";
import logo from "../../assets/Logo.jpg";

const LoginLayout = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center  pt-20">
      <div className="w-full flex w-[50%] max-w-[450px] h-[150px] p-2 ">
        <img src={logo} alt="" className="w-full h-full " />
      </div>
      <div className="w-full h-full p-4 pt-2 flex items-center justify-start flex-col">
      <Outlet />
      </div>
    </div>
  );
};

export default LoginLayout;
