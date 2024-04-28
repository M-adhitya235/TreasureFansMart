import React, { useEffect } from "react";
import LayoutAdmin from "./LayoutSidebar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";
import FormAddProduct from "../components/FormAddProduct";

const AddProduct = () => {
    const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
    if (user && user.role !== "admin" && user.role !== "user") {
      navigate("/dashboard");
    }
  }, [isError, user, navigate]);

  return (
    <LayoutAdmin>
      <FormAddProduct />
    </LayoutAdmin>
  );
};

export default AddProduct;