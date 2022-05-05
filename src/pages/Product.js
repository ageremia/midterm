import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";

const Product = () => {

    const { product_id } = useParams();

    const [product, setProduct] = useState([]);

    useEffect(() => {
      const getData = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/products/${product_id}`);
          setProduct(response.data);
        } catch (error) {
          console.log('An error ocurred:', error);
        }
      };
  
      getData();
    }, [product_id]);

    return (
        <>
             {product ? (
                <div className="product">
                    <img src={product.image} alt={product.id} height="400"></img>
                    <div>
                        <h1>{product.title}</h1>
                        {product.category}
                        <br></br><br></br>
                        {product.description}
                        <br></br><br></br>
                        <Link to="/products">
                            <button>Go Back</button>
                        </Link>
                        
                    </div>
                </div>
            ) : (
                <Loading/>
            )}
        </>
    )
}

export default Product;