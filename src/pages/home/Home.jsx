import React, { useEffect, useState } from "react";
import GetProducts from "../../components/apifetch/ApiFetch";
import Products from "../../components/products/Products";

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
      <h1 className="mt-5 mb-6 text-3xl font-bold">Products</h1>
      <div className="flex flex-wrap justify-center shrink-1 gap-x-10 gap-y-10">
        {products.map((product) => {
          return <Products key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}

export default Home;
