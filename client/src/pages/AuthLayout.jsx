import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SparklesPreview } from "../components/ui/SparklesPreview";
import {  setPageLoading } from "../redux/stateSlices/authSlice";

const AuthLayout = ({ children, authentication = true }) => {
  const navigate = useNavigate();
  const isUserAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isPageLoading = useSelector((state) => state.auth.isPageLoading);
  const [isAuthChecked, setIsAuthChecked] = useState(false)
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageLoading(true));
    if (authentication && isUserAuthenticated !== authentication) {
      navigate("/welcome");
    } else if (!authentication && isUserAuthenticated !== authentication) {
      navigate("/");
    }
    setIsAuthChecked(true)
    dispatch(setPageLoading(false));
  }, [isUserAuthenticated, navigate, authentication, dispatch]);

  // Only render children if authentication status is checked
  return isPageLoading || !isAuthChecked ? (
    <SparklesPreview />
  ) : (
    <>{children}</>
  );
};

export default AuthLayout;
