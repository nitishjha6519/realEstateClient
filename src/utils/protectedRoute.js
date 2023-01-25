import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const ProtectedRoute = (props) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkUserToken = () => {
    const userToken = localStorage.getItem("token");
    if (!userToken || userToken === "undefined" || userToken === "") {
      setIsLoggedIn(false);
      return navigate("/");
    }
    setIsLoggedIn(true);
  };

  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);

  return <>{isLoggedIn ? props.children : null}</>;
};
export default ProtectedRoute;

// import React, { useEffect, useState } from "react";
// import { Outlet, Navigate } from "react-router-dom";

// const ProtectedRoute = () => {
//   // const navigate = useNavigate();
//   const [isAuthenticated, setAuthenticated] = useState(false);
//   useEffect(() => {
//     const isLoggedIn = localStorage.getItem("isLoggedIn");
//     if (isLoggedIn === "true") {
//       setAuthenticated(!isAuthenticated);
//     }
//   }, [isAuthenticated]);

//   return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
// };

//export default ProtectedRoute;
