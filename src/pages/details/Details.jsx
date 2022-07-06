import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { GetSingleProduct } from "../../components/apifetch/ApiFetch";

function Details(props) {
  const params = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProduct();

    async function getProduct() {
      const product = await GetSingleProduct(params.id);
      setProduct(product);
      console.log(product);
    }
  }, []);

  return (
    <div>
      <h1>{product.title}</h1>
      <h1>${product.price}</h1>
      <h1>{product.description}</h1>
      <img className="w-32 h-32" src={`${product.image}`} alt="" />
      <h1>{product.rating.rate}</h1>
    </div>
  );
}

export default Details;
