import React, { useEffect, useState } from "react";
import GetProducts from "../../components/apifetch/ApiFetch";
import Products from "../../components/products/Products";

import "./home.scss";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();

    async function getProducts() {
      const products = await GetProducts();
      setProducts(products);
    }
  }, []);

  return (
    <div class="flex flex-col items-center justify-center">
      <h1 className="mt-5 mb-6 text-3xl font-bold underline">Products</h1>
      <div className="grid grid-flow-row grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {products.map((product) => {
          return <Products key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}

export default Home;
