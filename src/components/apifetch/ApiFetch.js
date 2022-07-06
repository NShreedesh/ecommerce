import axios from "axios";

async function GetAllProducts() {
  let response = { data: [] };
  try {
    response = await axios.get(`https://fakestoreapi.com/products`);
  } catch (err) {
    console.log(err.message);
  }
  return response.data;
}

async function GetSingleProduct(id) {
  let response = {};
  try {
    response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  } catch (err) {
    console.log(err.message);
  }
  return response.data;
}

export { GetAllProducts, GetSingleProduct };
