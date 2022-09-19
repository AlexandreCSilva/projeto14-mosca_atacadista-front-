import axios from "axios";

const BASE_URL = "https://git.heroku.com/moscaatacadista.git";

function postSignIn(body) {
  const promise = axios.post(`${BASE_URL}/signIn`, body);
  return promise;
}

function postSignUp(body) {
  const promise = axios.post(`${BASE_URL}/user`, body);
  return promise;
}

function getProducts(header) {
  const promise = axios.get(`${BASE_URL}/products`, header);
  return promise;
}

function getProductsInPromotion(config) {
  const promise = axios.get(`${BASE_URL}/products/category/Promocao`, config);
  return promise;
}

function getUser(config) {
  const promise = axios.get(`${BASE_URL}/user`, config);
  return promise;
}

function putUser(data, config) {
  const promise = axios.put(`${BASE_URL}/user`, data, config);
  return promise;
}

function postProduct(data, config) {
  const promise = axios.post(`${BASE_URL}/product`, data, config);
  return promise;
}

export {
  postSignIn,
  postSignUp,
  getProducts,
  getProductsInPromotion,
  getUser,
  putUser,
  postProduct,
};
