import React from 'react';

//Styles
import styles from './Product.module.css'

//Functions
import { shorten } from '../helpers/functions';

const Product = ({productData}) => {
    return (
        <div className={styles.container}>
            <img src={productData.image} alt='saeed'/>
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <div>
                <a href='#'>details</a>
                <div>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;