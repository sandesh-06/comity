import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SparklesPreview } from "../components/ui/SparklesPreview";
import { setPageLoading } from "../redux/stateSlices/authSlice";

const AuthLayout = ({ children, authentication = true }) => {
  const navigate = useNavigate();
  const isUserAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated
  );
  const isLoading = useSelector((state) => state.auth.isPageLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageLoading(true));
    if (authentication && isUserAuthenticated !== authentication) {
      navigate("/welcome");
    } else if (!authentication && isUserAuthenticated !== authentication) {
      navigate("/");
    }
    dispatch(setPageLoading(false));
    // setTimeout(() => {
    //     dispatch(setPageLoading(false))
    // }, 1400);
  }, [isUserAuthenticated, navigate, authentication]);

  return isLoading ? (
    <>
      <SparklesPreview />
    </>
  ) : (
    <>{children}</>
  );
};

export default AuthLayout;
