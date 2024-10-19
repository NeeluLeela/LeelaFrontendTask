import LoginLayout from "../Components/Layouts/LoginLayout";
import LoginComponent from "../Components/Pages/AuthComponnets/Login";
import SignUpComponent from "../Components/Pages/AuthComponnets/Signup";
import Dashboard from "../Components/Pages/Dashboard";

export const nonPrivateRoutes = [

      {
        path: "/login",
        component: <LoginComponent />,
      },
      {
        path: "/signup",
        component: <SignUpComponent />,
      },

];

export const authenticatedRoutes=[
  {
    path: "/dashboard",
    component: < Dashboard/>,
  },
  {
    path: "/clientMortgageData",
    component: < Dashboard/>,
  },
]