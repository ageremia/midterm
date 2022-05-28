import useFetch from "../useFetch.tsx";

const useFetchProduct = (productId) => {
  return useFetch(`/products/${productId}`);
};

export default useFetchProduct;