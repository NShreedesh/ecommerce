import React from "react";

function Products(props) {
  const { product } = props;

  return (
    <div className="flex flex-col items-center justify-between gap-4 px-10 py-5 transition-all border border-gray-400 border-solid shadow-sm cursor-pointer hover:scale-x-110 hover:scale-y-110 flex-grow-1 w-72 shadow-gray-400 rounded-xl hover:shadow-xl hover:shadow-slate-900">
      <img className="w-32 h-32" src={`${product.image}`} alt="" />
      <div className="flex items-end w-full gap-5">
        <p className="font-semibold line-clamp-3">{product.title}</p>
        <p className="font-semibold text-green-700">{`$${product.price}`}</p>
      </div>
    </div>
  );
}

export default Products;
