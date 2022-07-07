import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { GetAllProducts } from "../../components/apifetch/ApiFetch";
import Products from "../../components/products/Products";

import "./home.scss";

function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getProducts();

    async function getProducts() {
      setIsLoading(true);
      const products = await GetAllProducts();
      setProducts(products);
      setIsLoading(false);
    }
  }, []);

  return !isLoading ? (
    products.length > 0 && !products.err ? (
      <div className="flex flex-col items-center justify-center">
        <h1 className="mt-5 mb-6 text-4xl font-bold underline ">
          Products In Stock
        </h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {products.map((product) => {
            return <Products key={product.id} product={product} />;
          })}
        </div>
      </div>
    ) : (
      <div>
        <h1 className="text-3xl font-bold text-center text-red-500">
          {products.err || "Empty Products"}
        </h1>
      </div>
    )
  ) : (
    <div className="flex items-center justify-center pt-10">
      <ThreeDots height="100" width="100" />
    </div>
  );
}

export default Home;
