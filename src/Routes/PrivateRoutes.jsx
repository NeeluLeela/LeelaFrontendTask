import { Navigate,Outlet } from "react-router-dom";
import {isAuthenticated} from '../Components/Library/Utilities/isAuthenticated'


const PrivateRoutes=()=>{
    
    const auth=isAuthenticated ()
    

    return(
        auth ?<Outlet/>:<Navigate to='/login'/>
    )
}
export default PrivateRoutes;