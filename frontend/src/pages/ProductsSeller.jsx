import React, { useEffect } from "react";
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";
import ProductList from "../components/ProductLIst";
import LayoutSeller from "./LayoutSeller";

const ProductsSeller = () => {
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
    if (user && user.role !== "user") {
      navigate("/dashboard");
    }
  }, [isError, user, navigate]);

  return (
    <LayoutSeller>
      <ProductList />
    </LayoutSeller>
  );
};

export default ProductsSeller;