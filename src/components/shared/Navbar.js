import React , { useContext } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
//Context
import { CartContext } from '../../context/CartContextProvider';


//Icons
import shop from '../../assets/icons/shop.svg'
const Navbar = () => { 

    const {state} = useContext(CartContext)
    return (
        <div>
            <div>
                <Link to='/products'>Products</Link>
                <div>
                    <img src={shop} alt='shop' />
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;