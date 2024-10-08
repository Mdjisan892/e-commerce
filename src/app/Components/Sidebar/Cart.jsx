"use client";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from "@headlessui/react";
import { useState } from "react";
import { CartButton, CloseBtn } from "../(Buttons)/Buttons";
import { useCart } from "../../../../lib/ContexApi";

function Cart() {
  const [open, setOpen] = useState(false);
  const { cartItem, addCart } = useCart();

  const handleIncrease = (itemId) => {
    addCart({ id: itemId });
  };

  const handleDecrease = (itemId) => {
    addCart({ id: itemId, quantity: -1 })
  };

  return (
    <>
      {<CartButton setOpen={setOpen} />}
      <Dialog open={open} onClose={setOpen} className="relative z-50">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0 z-100"
        />

        <div className="fixed inset-0 overflow-visible">
          <div className="absolute inset-0 overflow-visible">
            <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none">
              <DialogPanel
                transition
                className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
              >
                <TransitionChild>
                  <div className="absolute right-0 top-0 mr-8 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:mr-10 sm:pl-4">
                    <div
                      onClick={() => setOpen(false)}
                      className="relative text-gray-300 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                    >
                      <span className="absolute -inset-2.5" />
                      <span className="sr-only">Close panel</span>
                      <div className="mr-[32rem] m-2 absolute">
                        <CloseBtn aria-hidden="true" className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </TransitionChild>

                <div className="flex flex-col h-full py-6 overflow-y-scroll bg-white rounded-lg shadow-xl">
                  <div className="px-4 sm:px-6">
                    <DialogTitle className="text-lg font-semibold leading-6 text-gray-900">
                      Ordered List
                    </DialogTitle>
                    <hr />
                  </div>
                  <div className="relative flex-1 px-4 mt-6 sm:px-6">
                    <div className="p-2 mt-4 bg-gray-100 rounded-md shadow-xl">
                      {cartItem.length > 0 ? (
                        cartItem.map((item) => {
                          const totalPrice = item.price * item.quantity;
                          return (
                            <div
                              key={item.id}
                              className="flex items-center gap-4 p-4 mt-4 bg-white rounded-md shadow-md"
                            >
                              <img
                                src={item.image}
                                alt={item.name}
                                className="object-cover w-24 h-24 rounded-md"
                              />
                              <div className="flex-1">
                                <p className="mb-1 font-bold">{item.name}</p>
                                <h2 className="font-bold text-orange-500">
                                  ${totalPrice.toFixed(2)}{" "}
                                </h2>
                                <div className="flex items-center mt-2">
                                  <button
                                    onClick={() => handleDecrease(item.id)}
                                    className="px-[0.70rem] border rounded-sm py-2">-</button>
                                  <p className="mx-2">{item.quantity }</p>{" "}
                                  <button
                                    onClick={() => handleIncrease(item.id)}
                                    className="px-3 py-2 border rounded-sm">+</button>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <p className="mt-4 text-center text-gray-500">
                          No items in cart
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default Cart;
