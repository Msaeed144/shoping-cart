import React , {useContext}from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
//Styles
import styles from './Product.module.css'

//Functions
import { shorten , isInCart , quantityCount} from '../../helpers/functions';
//Context 
import { CartContext } from '../../context/CartContextProvider';

//Icons
import trash from '../../assets/icons/trash.svg'

const Product = ({productData}) => {

    const {state , dispatch } = useContext(CartContext)

    return (
        <div className={styles.container}>
            <img src={productData.image} alt='saeed'/>
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price} $</p>
            <div>
                <Link to={`/products/${productData.id}`}>details</Link>
                <div>
                    {
                        quantityCount(state , productData.id) === 1 && <button onClick={() => dispatch({type:"REMOVE_ITEM" , payload:productData})}><img src={trash} alt='trash' style={{width:'20px'}}/></button>
                    }
                    {
                        quantityCount(state , productData.id) > 1 && <button onClick={() => dispatch({type:"DECREASE" , payload:productData})}>-</button>
                    }
                    {
                        isInCart(state , productData.id) ?
                        <button onClick={() => dispatch({type:"INCREASE" , payload:productData})}>+</button> :
                        <button onClick={() => dispatch({type:"ADD_ITEM" , payload:productData})}>Add to Cart</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;