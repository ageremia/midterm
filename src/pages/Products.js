import React  from 'react';
import Spinner from '../components/Spinner';
import ProductCard from '../components/productCard.tsx';
import useFetchProducts from '../hooks/products/useFetchProducts';


const Products = () => {

    const { data: products, loading, error } = useFetchProducts();

    if (loading) return <Spinner />;

    if (error) {
      return <p>There was an error</p>;
    }

    return (
        <>
            {products.length && (
                products.map((product) => {
                    return (
                       <ProductCard card={product} key={product.id}></ProductCard>
                    );
                })
            )}
        </>
    )

}

export default Products;