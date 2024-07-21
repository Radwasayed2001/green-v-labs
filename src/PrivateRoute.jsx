import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('ACCESS_TOKEN');
    return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
