import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
import ProductCard from '../components/productCard';


const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
      const getData = async () => {
        try {
          const response = await axios.get('http://localhost:3000/products/');
          setProducts(response.data);
        } catch (error) {
          console.log('An error ocurred:', error);
        }
      };
  
      getData();
    }, []);

    return (
        <>
            {products.length ? (
                products.map((product) => {
                    return (
                       <ProductCard card={product} key={product.id}></ProductCard>
                    );
                })
            ) : (
                <Loading/>
            )}
        </>
    )



}

export default Products;