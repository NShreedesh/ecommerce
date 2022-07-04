import React from "react";

function Products(props) {
  const { product } = props;

  return (
    <div className="flex flex-col items-center justify-between px-10 py-10 shadow-sm cursor-pointer w-72 shadow-gray-400 rounded-xl hover:shadow-2xl hover:shadow-slate-900 ">
      <img className="w-32 h-32" src={`${product.image}`} alt="" />
      <div className="flex items-start gap-10">
        <p className="font-semibold">{product.title}</p>
        <p className="font-semibold text-green-700">{`$${product.price}`}</p>
      </div>
    </div>
  );
}

export default Products;
