"use client";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  TransitionChild,
} from "@headlessui/react";
import { useEffect, useState } from "react";
import { CloseBtn } from "../(Buttons)/Buttons";
import NextHeader from "../Header/NextHeader";
import { IoMdArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";

function DrawerComponent() {
  const [open, setOpen] = useState(false);
  const [allProductDetails, setallProductDetails] = useState([]);
  const redirect = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products/categories");
        if (!res.ok) {
          throw new Error("Unable to Fetching Data");
        }
        const data = await res.json();
        setallProductDetails(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleProductButton = (categoryName) => {
    return redirect.push(`/Components/Results/${categoryName}`);
  };

  return (
    <>
      <NextHeader open={open} setOpen={setOpen} />

      <Dialog open={open} onClose={setOpen} className="relative z-50">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
        />
        <div className="fixed inset-0 overflow-visible">
          <div className="absolute inset-0 overflow-visible">
            <div className="fixed inset-y-0 left-0 flex max-w-full pr-10 pointer-events-none">
              <DialogPanel
                transition
                className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:-translate-x-full sm:duration-700"
              >
                <TransitionChild>
                  <div className="absolute left-0 top-0 -mr-8 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-mr-10 sm:pr-4">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="relative text-gray-300 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                    >
                      <div className="absolute ml-[31rem] mt-3">
                        <CloseBtn aria-hidden="true" className="w-6 h-6 " />
                      </div>
                      <span className="absolute -inset-2.5" />
                      <span className="sr-only">Close panel</span>
                    </button>
                  </div>
                </TransitionChild>
                <div className="flex flex-col h-full py-6 overflow-y-scroll bg-white shadow-xl">
                  <div className="px-4 sm:px-6">
                    <DialogTitle className="text-base font-semibold leading-6 text-gray-900">
                      Categories
                    </DialogTitle>
                    <hr />
                  </div>
                  <div className="relative flex-1 px-4 mt-6 text-black sm:px-6">
                    {allProductDetails.length > 0 ? (
                      allProductDetails.map((category, index) => {
                        return (
                          <ul key={index}>
                            <li className="flex flex-col p-2 mb-2 font-bold bg-gray-300 border-gray-700 rounded-sm hover:scale-105 gap-y-3">
                              <button
                                className="w-full"
                                onClick={() =>
                                  handleProductButton(category.name)
                                }
                              >
                                <p className="flex justify-between">
                                  {category.name}
                                  <IoMdArrowForward className="mt-[0.25rem]" />
                                </p>
                              </button>
                            </li>
                          </ul>
                        );
                      })
                    ) : (
                      <p>No categories available</p>
                    )}
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

export default DrawerComponent;
