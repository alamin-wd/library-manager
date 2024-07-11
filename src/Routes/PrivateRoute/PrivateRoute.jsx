
// import { Navigate, useLocation } from "react-router-dom";
// import PropTypes from 'prop-types';
// import { useContext } from "react";
// import { AuthContext } from "../../providers/AuthProvider";

// const PrivateRoute = ({ children }) => {
 
//     const { user } = useContext(AuthContext);
//     const location = useLocation();

//     if (user) {
//         return children;
//     }
//     return <Navigate state ={location.pathname} to={"/signIn"}></Navigate>
// };

// PrivateRoute.propTypes = {
//     children: PropTypes.node,
// }

// export default PrivateRoute;