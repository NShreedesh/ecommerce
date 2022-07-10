import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { GetSingleProduct } from "../../components/apifetch/ApiFetch";
import { ThreeDots } from "react-loader-spinner";

import "./details.css";

function Details() {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getProduct();

    async function getProduct() {
      setIsLoading(true);
      const product = await GetSingleProduct(params.id);
      setProduct(product);
      setIsLoading(false);
    }
  }, [params.id]);

  return !isLoading ? (
    <div>
      {!product.err ? (
        <div className="flex flex-col items-center justify-center gap-10 px-10 h-bottom">
          <img className="w-52 h-52" src={`${product.image}`} alt="Product" />
          <div className="flex max-w-xl gap-10">
            <div className="flex flex-col gap-5">
              <h1 className="text-lg font-bold">{product.title}</h1>
              <p className="text-gray-500">{product.description}</p>
              <div className="flex gap-3">
                <label htmlFor="quantity">Quantity:</label>
                <input
                  className="border-2 border-gray-500 w-14"
                  min={1}
                  max={30}
                  defaultValue={1}
                  type="number"
                  id="quantity"
                  required
                />
              </div>
              <div className="flex flex-col gap-5">
                <button className="details-button">Add To Cart</button>
                <button className="details-button">Buy Now</button>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-green-600">${product.price}</h1>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center pt-5">
          <h1 className="text-3xl font-bold text-red-500">
            {product.err || "Error Occured"}
          </h1>
        </div>
      )}
    </div>
  ) : (
    <div className="flex items-center justify-center pt-10">
      <ThreeDots height="100" width="100" />
    </div>
  );
}

export default Details;
