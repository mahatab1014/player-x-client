/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Components/Spinner/Spinner";
import { AuthContext } from "../Provider/AuthProfider";

const Private_Routes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation(); // Corrected variable name from "loaction" to "location"

  if (loading) {
    return <Spinner />;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/auth/signin" state={location.pathname} />; // Corrected variable name from "loaction" to "location"
};

export default Private_Routes;
