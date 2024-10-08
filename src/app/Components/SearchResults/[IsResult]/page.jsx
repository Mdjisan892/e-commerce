import Loading from "../../loading";
import { getProductBySearch } from "../../../../../lib/getProductBySearch";
import SearchPD from "../SearchPD";

const SearchProductResult = async({ params }) => {
  const {IsResult} = params
  const products = await getProductBySearch(IsResult)
 
  return (
    <div className="w-full h-full px-2 py-8 rounded-sm bg-[#ffffff3d] backdrop-blur-md">
      <h1 className="mb-8 text-4xl font-extrabold text-center text-gray-800 drop-shadow-lg">
        Search Results
      </h1>
      <div className="flex justify-center mb-6">
        <hr className="w-1/3 border-gray-300" />
      </div>
      <div className="grid grid-cols-1 gap-10 mx-auto max-w-7xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products && products.length > 0 ? (
          products.map((product) => (
          <SearchPD key={product.id} product={product} />
          ))
        ) : (
          <div className="mx-auto">
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchProductResult;