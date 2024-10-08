import { getComments } from "../../../../../lib/comment"; 
import { BiSolidLike } from "react-icons/bi";
import { FaUserInjured } from "react-icons/fa";
import { getProductById } from "../../../../../lib/productById";
import { AddToCartBtn, BuyButton } from "../../(Buttons)/Buttons";

const ProductOverView = async ({ params }) => {
  const { id } = params;

  const product = await getProductById(id);
  const comments = await getComments(id);

  return (
    <>
      <div className="flex flex-col items-center gap-10 p-10 shadow-2xl bg-white/50 backdrop-blur-md rounded-xl md:flex-row">
        <div className="w-full md:w-[30%]">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="object-cover w-full h-full transition-transform duration-500 bg-white rounded-lg shadow-lg hover:scale-110"
          />
        </div>
        <div className="w-full space-y-5 md:w-1/2">
          <h1 className="text-3xl font-extrabold text-gray-900">
            {product.title}
          </h1>
          <p className="text-lg text-gray-700">
            Price: $
            <span className="font-bold text-green-600">{product.price}</span>
          </p>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-sm text-gray-600">In Stock: {product.stock}</p>
          <p className="text-sm text-gray-600">Brand: {product.brand}</p>
          <div className="flex gap-6 mt-6">
            <AddToCartBtn product={product}/>
            <BuyButton  />
          </div>
        </div>
      </div>

      <div className="w-full p-8 mt-10 shadow-lg rounded-xl bg-white/60 backdrop-blur-lg">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          Customer Reviews
        </h2>
        {comments ? (
          comments.map((comment) => {
            const { body, user, likes, id } = comment;
            return (
              <div
                key={id}
                className="grid p-6 mb-6 bg-white rounded-lg shadow-md sm:flex sm:gap-5"
              >
                <div className="flex-shrink-0 p-4 bg-teal-600 rounded-full">
                  <FaUserInjured fill="white" size={45} />
                </div>
                <div className="w-full mt-4 sm:mt-0">
                  <p className="mb-3 italic text-gray-800">{`${body}`}</p>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <p>
                      By:{" "}
                      <span className="font-semibold text-gray-900">
                        {user.fullName}
                      </span>
                      (@{user.username})
                    </p>
                    <p className="flex items-center gap-1">
                      <BiSolidLike size={18} className="text-gray-900" />{" "}
                      {likes}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-gray-500">No comments found.</p>
        )}
      </div>
    </>
  );
};

export default ProductOverView;