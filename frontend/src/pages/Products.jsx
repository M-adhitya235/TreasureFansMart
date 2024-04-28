import React, { useEffect } from "react";
import LayoutAdmin from "./LayoutSidebar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";
import ProductList from "../components/ProductLIst";

const Products = () => {
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
      <ProductList />
    </LayoutAdmin>
  );
};

export default Products;