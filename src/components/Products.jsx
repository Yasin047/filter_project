import Image from "next/image";
import { MdShoppingCart } from "react-icons/md";
import { Puff } from "react-loader-spinner";

const Products = ({ products, loading }) => {
  if (loading) {
    return (
      <div
        style={{
          width: "100%",
          height: "calc(100vh - 72px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Puff
          visible={true}
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="puff-loading"
        />
      </div>
    );
  }
  return (
    <>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {products?.map((product) => {
          return (
            <div className="shadow-md h-[600px] bg-white rounded flex flex-col  text-start relative">
              <Image src={product.src} height={228} width={228} />
              <div className="h-[1px] w-full bg-gray-300 mb-4"></div>
              <div className="text-sm font-medium mx-3">{product.name}</div>
              <div className="flex items-center justify-start gap-2 text-sm text-start mx-3 mt-6 text-gray-700">
                <div className="h-[5px] w-[5px] rounded-full bg-gray-700"></div>
                <div>Frequency: {product.frequency}</div>
              </div>
              <div className="flex items-center justify-start gap-2  text-sm text-start mx-3 mt-6 text-gray-700">
                <div className="h-[5px] w-[5px] rounded-full bg-gray-700"></div>
                <div>Frequency: {product.sensitivity}</div>
              </div>
              <div className="flex items-center justify-start gap-2 text-sm text-start mx-3 mt-6 text-gray-700">
                <div className="h-[5px] w-[5px] rounded-full bg-gray-700"></div>
                <div>Frequency: {product.cableLength}</div>
              </div>
              <div className="h-[1px] w-full bg-gray-300 mt-16"></div>
              <div className="text-rose-500 font-semibold absolute bottom-16 w-full flex justify-center items-center">
                {product.availability === "inStock"
                  ? `${product.price}৳ `
                  : "Upcoming"}
              </div>
              <div className="w-full flex justify-center items-center absolute bottom-4">
                {product.availability === "inStock" ? (
                  <button className="hover:bg-[#3749BB] flex justify-center items-center gap-2 hover:text-white text-[#3749BB] text-sm font-semibold px-16 py-2 rounded transition-all">
                    <MdShoppingCart size={20} />
                    Buy Now
                  </button>
                ) : (
                  <button
                    disabled
                    className="bg-[#9c9c9f]  text-[#3749BB] text-sm font-semibold px-16 py-2 rounded"
                  >
                    Upcoming
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
