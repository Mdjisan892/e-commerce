"use client";
import Link from "next/link";
import { getAllProductsCatagory } from "../../../../lib/getAllProducts";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AddtoCartSvgButton } from "../(Buttons)/Buttons";
import Loading from "../loading";

export default function DashBoard() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const { products } = await getAllProductsCatagory();
      setProducts(products);
    };
    fetchProducts();
  }, []);

  return (
    <div className="w-full h-full py-4 bg-[#ffffff3d] backdrop-blur-sm relative">
      <h1 className="mb-8 text-3xl font-bold text-center text-gray-800">
        Our Products
      </h1>
      <hr className="mb-2" />
      <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products ? (
          products.map((product) => (
            <motion.div
              key={product.id}
              className="overflow-hidden duration-75 transform bg-white shadow-lg rounded-xl hover:scale-105 w-[270px] mx-auto"
              initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              onViewportEnter={() => console.log(`Entered viewport: ${product.title}`)}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex flex-col w-[270px] h-[425px] p-4 bg-gray-100 rounded-lg relative shadow-md">
                <Link passHref href={`/Components/ProductOverView/${product.id}`}>
                  <div className="relative w-full overflow-hidden transition-transform duration-200 ease-in-out bg-orange-200 rounded-lg h-44 hover:rotate-2">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="object-fill w-full h-full rounded-lg"
                      fill="true"
                    />
                  </div>

                  <div className="flex-grow mt-4">
                    <p className="text-lg font-bold text-gray-800">
                      {product.title}
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      {product.description.slice(0, 40)}...
                    </p>
                    <p className="text-sm text-gray-500">
                      In Stock: {product.stock}
                    </p>
                    <p className="text-sm text-gray-500">
                      Category: {product.category}
                    </p>
                  </div>
                </Link>

                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-4 pt-2 bg-gray-100 border-t border-gray-300 rounded-b-lg">
                  <span className="text-lg font-bold text-gray-800">
                    ${product.price}
                  </span>
                  <AddtoCartSvgButton product={product} />
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="flex justify-center items-center h-[80vh] ml-[26rem] w-full">
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
}