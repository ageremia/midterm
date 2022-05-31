import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { ThemeContext } from '../context/themeContext';
import useFetchProduct from '../hooks/products/useFetchProduct';
import { productAdded } from '../app/productSlice';
import { ProductType } from '../types/ProductType';


interface Props {
    inCart: Boolean
}

const Product = ({ inCart }: Props) => {

    const { theme } = useContext(ThemeContext);

    const { productId } = useParams();

    const { data: product, loading, error } = useFetchProduct(productId);

    const dispatch = useDispatch();


    const onAddToCart = (product:ProductType) => {
        try {
            dispatch(productAdded(product))
        } catch (err) {
            console.error('Failed to save the cart: ', err)
        }
    }

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return <p>There was an error</p>;
    }



    return (
        <>
            {product && (
                <div className="product">
                    <img src={product.image} alt={product.id} height="400"></img>
                    <div style={{ color: theme.foreground }}>
                        <h1 >{product.title}</h1>
                        {product.category}
                        <br></br><br></br>
                        {product.description}
                        <br></br>
                        {!inCart && (
                            <button onClick={() => onAddToCart(product)}>Add to Cart</button>
                        )}
                        <br></br><br></br>
                        <Link to="/products" style={{ color: theme.foreground }}>
                            <button>Go Back</button>
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
}

export default Product;