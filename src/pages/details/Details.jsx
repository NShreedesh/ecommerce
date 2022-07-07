import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { GetSingleProduct } from "../../components/apifetch/ApiFetch";
import { ThreeDots } from "react-loader-spinner";

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
        <div className="flex flex-col items-center justify-center gap-10">
          <img className="w-32 h-32" src={`${product.image}`} alt="Product" />
          <div className="flex justify-center gap-20 px-5 w-96 lg:w-1/2 lg:px-2">
            <div className="flex flex-col gap-3">
              <h1 className="font-bold">{product.title}</h1>
              <p>{product.description}</p>
              <div>
                <label htmlFor="quantity">Quantity</label>
                <input
                  className="px-1 border border-black"
                  min={1}
                  type="number"
                  id="quantity"
                  required
                />
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
