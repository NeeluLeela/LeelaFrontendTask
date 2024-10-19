import { DashboardIcon } from "@radix-ui/react-icons";
import { BsDashLg, BsDashSquareDotted, BsFillDashSquareFill } from "react-icons/bs";
import { DiAngularSimple } from "react-icons/di";
import { GrDashboard } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";
import { RiSlideshowLine } from "react-icons/ri";

export const SideBarData = [
    {
        to: '/dashboard',
        icon: <MdDashboard/>,

        label: 'Dashboard'
    },
    {
        to: '/clientMortgageData',
        icon: <RiSlideshowLine />,

        label: 'Client Mortgage Data'
    }
]