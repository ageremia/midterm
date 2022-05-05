import { Link } from 'react-router-dom';

const ProductCard = (props) => {

    return (
        <Link to={`${props.card.id}`}>
            <div>
                <img src={props.card.image} alt={props.card.id} height="100"></img>
                {props.card.title}
            </div>
        </Link>
    )

}

export default ProductCard;