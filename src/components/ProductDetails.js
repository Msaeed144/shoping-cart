import React, { useContext } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

//Context
import { ProductContext } from '../context/ProductContextProvider';

const ProductDetails = (props) => {
    const data = useContext(ProductContext)
    const id = parseInt(props.match.params.id)
    const product = data.find(item => item.id === id)
    const {image , title , description , price , category} = product
    return (
        <div>
            {console.log(typeof(product.id))}
            {console.log(typeof(id))}
            
            
            <img src={image} alt='product' />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{category}</p>
                <div>
                    <span>{price}</span>
                    <Link to='/products'>Back to Shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;