import useFetch from '../useFetch.tsx';

const useFetchProducts = () => {
  return useFetch('/products');
};

export default useFetchProducts;