import axios from "axios";

async function GetAllProducts() {
  let response = { data: [] };
  try {
    response = await axios.get(`https://fakestoreapi.com/products`);
  } catch (err) {
    response.err = err.message;
    return response;
  }
  return response.data;
}

async function GetSingleProduct(id) {
  let response = {};
  try {
    response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  } catch (err) {
    response.err = err.message;
    return response;
  }
  return response.data;
}

export { GetAllProducts, GetSingleProduct };
