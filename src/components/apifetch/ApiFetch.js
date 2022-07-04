import axios from "axios";

async function GetProducts() {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
}

export default GetProducts;
