import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/themeContext';

const ProductCard = (props) => {
    const { theme } = useContext(ThemeContext);
    return (
        <Link to={`${props.card.id}`} style={{ color: theme.foreground, margin: "auto", width: "50%" }}>
            <div>
                <img src={props.card.image} alt={props.card.id} height="100"></img>
                {props.card.title}
            </div>
        </Link>
    )

}

export default ProductCard;