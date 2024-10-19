import { RiVideoOnFill } from "react-icons/ri";
import { TbSettingsFilled } from "react-icons/tb";
import { MdAccountCircle } from "react-icons/md";
import { FaSortDown } from "react-icons/fa";

export const NavTabs = [
    { icon: <RiVideoOnFill className="w-[20px] h-[20px]" />,
      label:'Video Tutorial'
     },
    { icon: <TbSettingsFilled className="w-[20px] h-[20px]" />,
      label:'Admin',
      rightIcon:<FaSortDown className="mb-auto mt-[2px]"/>
     },
    { icon: <MdAccountCircle  className="w-[20px] h-[20px]"/>,
      label:'Marcus jovanovich' ,
      rightIcon:<FaSortDown className="mb-auto mt-[2px]"/>
    },
  ];
