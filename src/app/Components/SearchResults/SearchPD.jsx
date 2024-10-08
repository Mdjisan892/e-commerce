"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { AddtoCartSvgButton } from "../(Buttons)/Buttons";
import { shortTitle } from "../../../../lib/titleShorte";

const SearchPD = ({ product }) => {
  return (
    <motion.div
      key={product.id}
      className="overflow-hidden duration-75 transform bg-white/70 shadow-lg rounded-xl hover:scale-105 w-[270px] mx-auto"
      initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
      whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
      viewport={{ amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onViewportEnter={() => console.log(`Entered viewport: ${product.title}`)}
    >
      <div className="flex flex-col w-[270px] h-[425px] p-4 bg-gray-100 rounded-lg relative shadow-md">
        <Link passHref href={`/Components/ProductOverView/${product.id}`}>
          <div className="relative w-full h-48 overflow-hidden duration-300 ease-in-out bg-orange-200 rounded-lg hover:rotate-2">
            <img
              src={product.images[0]}
              alt={product.title}
              className="object-fill h-full mx-auto rounded-lg"
            />
          </div>
        </Link>
        <div className="flex-grow mt-4">
          <p className="text-lg font-bold text-gray-800">{product.title}</p>
          <p className="mt-1 text-sm text-gray-600">
            {shortTitle(product.description, 40)}
          </p>
          <p className="text-sm text-gray-500">In Stock: {product.stock}</p>
          <p className="text-sm text-gray-500">Brand: {product.brand}</p>
        </div>

        <div className="flex items-center justify-between pt-2 mt-2 border-t border-gray-300">
          <span className="text-lg font-bold text-gray-800">
            ${product.price}
          </span>
          <AddtoCartSvgButton product={product} />
        </div>
      </div>
    </motion.div>
  );
};

export default SearchPD;