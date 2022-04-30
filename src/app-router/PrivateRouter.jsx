
import {Navigate,Outlet} from "react-router-dom";
import { useSelector } from 'react-redux';


const PrivateRouter = () => {
    const {currentUser}= useSelector((state) => state.auth)

    if (!currentUser) {
        return <Navigate to="/login"  replace />;
    }
    return <Outlet />;

};

export default PrivateRouter;






