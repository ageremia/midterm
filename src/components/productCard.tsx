import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/themeContext';
import { ProductType } from '../types/ProductType';
import { useDispatch } from 'react-redux';
import { productAdded } from '../app/productSlice';

interface Props {
    card: ProductType,
    inCart: Boolean,
}

const ProductCard = ({ card, inCart }: Props) => {
    const { theme } = useContext(ThemeContext);

    const dispatch = useDispatch();


    const onAddToCart = () => {
        try {
            dispatch(productAdded(card))
        } catch (err) {
            console.error('Failed to save the cart: ', err)
        }  
    }

    return (
        <>
            <Link to={inCart? `/products/${card.id}` : `${card.id}`} style={{ color: theme.foreground, margin: "auto", width: "50%" }}>
                <div>
                    <img src={card.image} alt={card.id} height="100"/>
                    {card.title}
                    
                </div>
            </Link>
            <br></br>
            {!inCart && (<button onClick={onAddToCart}>Add to Cart</button>)}
            <br></br><br></br>
        </>
    )

}

export default ProductCard;