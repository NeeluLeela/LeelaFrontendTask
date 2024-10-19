import { NavLink, useNavigate } from "react-router-dom";
import { SideBarData } from "./SideBarData.jsx";
import { isAuthenticated } from "../../Library/Utilities/isAuthenticated.js";
import { BiLogOut } from "react-icons/bi";

const SideBar = ({ expandedSideBar }) => {
  const navigate=useNavigate()
const onlogoutclick=()=>{
  localStorage.clear()
  navigate('/login')
}
  const auth=isAuthenticated ()
  return (

    <div className="w-full h-full flex flex-col p-2">
      {SideBarData?.map((item, index) => (
        <NavLink to={item.to}key={index} className={'w-full h-[45px] text-white flex items-center justify-center'}>
          {expandedSideBar ? <div className="w-full h-full flex text-white items-center justify-start flex gap-2">
           { item.icon}
            <p>
                {item.label}
            </p>
          </div> : item.icon}
        </NavLink>
      ))}
   { auth&&  <div className="mt-auto text-white w-fit flex gap-2" onClick={onlogoutclick} >{expandedSideBar? <p className="flex items-center justify-center gap-2"><BiLogOut />Logout</p>:<BiLogOut/>} </div>}
    </div>
  );
};
export default SideBar
