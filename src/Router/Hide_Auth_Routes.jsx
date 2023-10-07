/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Spinner from "../Components/LoadingAnimation/Spinner";
import { AuthContext } from "../Provider/AuthProfider";
import SignIn from "../Pages/Auth/SignIn";

const Hide_Auth_Routes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Spinner />;
  }

  if (user) {
    return <Navigate to="/profile" />;
  }

  return children;
};

export default Hide_Auth_Routes;
