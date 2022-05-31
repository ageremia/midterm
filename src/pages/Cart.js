import {  useSelector } from 'react-redux';
import ProductCard from '../components/productCard.tsx';


const Cart = () => {

    const products = useSelector(state => state.cart);

    return (
        <>
            {products.cart.length && (
                products.cart.map((product) => {
                    return (
                       <ProductCard card={product} key={product.id} inCart={true}></ProductCard>
                    );
                })
            )}
        </>
    )

}

export default Cart;