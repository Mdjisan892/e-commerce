import ResultDashBoard from "../page";
import Loading from "../../loading";

export default async function Result({ params }) {
  const { Product } = params;
  const res = await fetch(
    `https://dummyjson.com/products/category/${Product}?limit=0`
  );
  const datas = await res.json();
  const products = datas.products;

  return (
    <>
      <div className="w-full h-full py-4 mt-16 bg-[#ffffff51] backdrop-blur-sm">
        <h1 className="mb-8 text-3xl font-bold text-center text-gray-800">
          Results
        </h1>
        <hr className="mb-2" />
        <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products ? (
            products.map((product) => (
             <ResultDashBoard key={product.id} product={product}/>
            ))
          ) : (
            <div className=" ml-[10rem]" ><Loading/></div>
          )}
        </div>
      </div>
    </>
  );
}
