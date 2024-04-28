import React, { useEffect } from "react";
import LayoutSidebar from "./LayoutSidebar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";
import Welcome from "../components/Welcome";

const DashboardSeller = () => {
    const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);

  return (
    <LayoutSidebar>
      <Welcome />
    </LayoutSidebar>
  );
};

export default DashboardSeller;