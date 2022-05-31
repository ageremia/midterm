import { useState, useEffect } from 'react';
import axios from 'axios';
import { ProductType } from '../types/ProductType';

const baseURL = 'http://localhost:3000';

interface Props {
    data: ProductType
}

const useFetch = (url:string) => {
  const [data, setData] = useState<ProductType>(null);
  const [loading, setLoading] = useState<Boolean>(true);
  const [error, setError] = useState<Boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response:Props = await axios.get(`${baseURL}${url}`);
        setData(response.data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
