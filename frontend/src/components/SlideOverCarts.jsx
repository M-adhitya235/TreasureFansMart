import React, { useEffect, useState } from "react";
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline'; // Import icons for plus and minus
import axios from 'axios';

export default function SlideOverCarts({ onClose }) {
  const [open, setOpen] = useState(true);
  const [carts, setCarts] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    getCart();
  }, []);

  useEffect(() => {
    // Hitung subtotal setiap kali carts berubah
    calculateSubtotal();
  }, [carts]);

  const getCart = async () => {
    const response = await axios.get("http://localhost:5000/carts");
    setCarts(response.data);
  };

  const deleteCart = async (cartId) => {
    await axios.delete(`http://localhost:5000/carts/${cartId}`);
    getCart();
  };

  const calculateSubtotal = () => {
    let total = 0;
    carts.forEach((cart) => {
      total += cart.product.price * cart.quantity;
    });
    setSubtotal(total);
  };

  const formatRupiah = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const increaseQuantity = async (cartId) => {
    const updatedCarts = carts.map((cart) => {
      if (cart.uuid === cartId && cart.quantity < cart.product.stock) {
        return {
          ...cart,
          quantity: cart.quantity + 1
        };
      }
      return cart;
    });
    setCarts(updatedCarts);
    // Update quantity on server
    await axios.patch(`http://localhost:5000/carts/${cartId}`, { quantity: updatedCarts.find(cart => cart.uuid === cartId).quantity });
  };

  const decreaseQuantity = async (cartId) => {
    const updatedCarts = carts.map((cart) => {
      if (cart.uuid === cartId && cart.quantity > 1) {
        return {
          ...cart,
          quantity: cart.quantity - 1
        };
      }
      return cart;
    });
    setCarts(updatedCarts);
    // Update quantity on server
    await axios.patch(`http://localhost:5000/carts/${cartId}`, { quantity: updatedCarts.find(cart => cart.uuid === cartId).quantity });
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        {/* Code for backdrop */}
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            {/* Code for sliding panel */}
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => {
                              setOpen(false);
                              onClose();
                            }}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {carts.map((cart) => (
                              <li key={cart.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src="https://cdn.icon-icons.com/icons2/2596/PNG/512/ad_product_icon_155850.png"
                                    alt={cart.product.imageAlt}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href={"#"}>{cart.product.name}</a>
                                      </h3>
                                      <p className="ml-4">{formatRupiah(cart.product.price)}</p>
                                    </div>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <div className="flex items-center gap-x-2"> {/* Add buttons for quantity */}
                                      <button
                                        type="button"
                                        className="text-amber-600 hover:text-amber-500"
                                        onClick={() => decreaseQuantity(cart.uuid)}
                                      >
                                        <MinusIcon className="h-4 w-4" aria-hidden="true" />
                                      </button>
                                      <p className="text-gray-500">Qty {cart.quantity}</p>
                                      <button
                                        type="button"
                                        className="text-amber-600 hover:text-amber-500"
                                        onClick={() => increaseQuantity(cart.uuid)}
                                      >
                                        <PlusIcon className="h-4 w-4" aria-hidden="true" />
                                      </button>
                                    </div>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-amber-600 hover:text-amber-500"
                                        onClick={() => deleteCart(cart.uuid)} 
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>{formatRupiah(subtotal)}</p> {/* Tampilkan subtotal */}
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-amber-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-amber-700"
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{' '}
                          <button
                            type="button"
                            className="font-medium text-amber-600 hover:text-amber-500"
                            onClick={() => {setOpen(false);onClose();}}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
