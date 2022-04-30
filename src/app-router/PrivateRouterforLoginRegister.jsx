
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';

const PrivateRouterforLoginRegister = () => {
    const {currentUser}= useSelector((state) => state.auth)
    if (!currentUser) {
        return <Outlet />;
    } else {
        return <Navigate to="/" replace />;
    }
};

export default PrivateRouterforLoginRegister;






