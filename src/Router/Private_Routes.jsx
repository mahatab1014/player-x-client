/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Components/LoadingAnimation/Spinner";
import { AuthContext } from "../Provider/AuthProfider";
import Skeleton from "../Components/LoadingAnimation/Skeleton";

const Private_Routes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Spinner />;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/auth/signin" state={location.pathname} />;
};

export default Private_Routes;
