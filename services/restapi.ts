import request from './api'

const getProduct = () => {
  return request({
    url: `https://my-json-server.typicode.com/benirvingplt/products/products`,
    method: 'GET',
  }).catch((err:any) => {
    return { msg: 'Sorry, we got error from server, try again.', err: err};
  });
}

const getProductId = (id:any) => {
  return request({
    url: `https://my-json-server.typicode.com/benirvingplt/products/products/${id}`,
    method: 'GET',
  }).catch((err:any) => {
    return { msg: 'Sorry, we got error from server, try again.', err: err};
  });
}

const API = {
  getProduct,
  getProductId
}

export default API;