import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import CenteredSingleActionDialog from "./Dialog"; // Import komponen dialog

const ProductOverviews = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [pid, setId] = useState("");
  const [msg, setMsg] = useState("");
  const [showSuccessDialog, setShowSuccessDialog] = useState(false); // State untuk mengontrol tampilan dialog sukses
  const [showErrorDialog, setShowErrorDialog] = useState(false); // State untuk mengontrol tampilan dialog kesalahan
  const navigate = useNavigate();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const getProductById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/products/${id}`);
        setName(response.data.name);
        setPrice(response.data.price);
        setId(response.data.id);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
          // Tampilkan dialog kesalahan
          setShowErrorDialog(true);
        }
      }
    };
    getProductById();
  }, [id]);

  const addToBag = async () => {
    try {
      await axios.post("http://localhost:5000/carts", {
        productId: pid,
        quantity: quantity
      });
      // Set pesan berhasil
      setMsg("Product added to bag successfully!");
      // Tampilkan dialog sukses
      setShowSuccessDialog(true);
    } catch (error) {
      // Tangani kesalahan jika ada
      if (error.response) {
        setMsg("out of stock");
        // Tampilkan dialog kesalahan
        setShowErrorDialog(true);
      }
    }
  };

  function closeSuccessDialog() {
    // Fungsi untuk menutup dialog sukses
    setShowSuccessDialog(false);
    // Reset pesan kesalahan
    setMsg("");
  }

  function closeErrorDialog() {
    // Fungsi untuk menutup dialog kesalahan
    setShowErrorDialog(false);
    // Reset pesan kesalahan
    setMsg("");
  }

  return (
    <div className="bg-white">
      <div className="pt-6">
        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src="https://cdn.icon-icons.com/icons2/2596/PNG/512/ad_product_icon_155850.png"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src="https://cdn.icon-icons.com/icons2/2596/PNG/512/ad_product_icon_155850.png"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src="https://cdn.icon-icons.com/icons2/2596/PNG/512/ad_product_icon_155850.png"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src="https://cdn.icon-icons.com/icons2/2596/PNG/512/ad_product_icon_155850.png"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{name}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">{`Rp ${price}`}</p>

            {/* {msg && (
              <p className="text-red-500">{msg}</p>
            )} */}

            <form className="mt-10">
            <button
              type="button"
              onClick={addToBag}
              className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-amber-600 px-8 py-3 text-base font-medium text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              Add to bag
            </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Tampilkan dialog sukses jika ada */}
      <CenteredSingleActionDialog 
        open={showSuccessDialog} 
        setOpen={setShowSuccessDialog} 
        message={msg} 
        type="success" // Tentukan jenis dialog (sukses)
      />

      {/* Tampilkan dialog kesalahan jika ada */}
      <CenteredSingleActionDialog 
        open={showErrorDialog} 
        setOpen={setShowErrorDialog} 
        message={msg} 
        type="error" // Tentukan jenis dialog (kesalahan)
      />
    </div>
  )
}

export default ProductOverviews;