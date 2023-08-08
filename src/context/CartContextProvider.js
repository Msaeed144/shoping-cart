import React from 'react';
import { useReducer , useContext } from 'react';

const initialstate = {
    selectedItems : [],
    itemsCounter: 0,
    total: 0,
    checkout: false
}
const cartReducer = (state , action) => {
    switch(action.type){
        case "ADD_ITEM":
            if(!state.selectedItems.find(item => item.id === action.payload.id)) {
                state.selectedItems.puch({
                    ...action.payload,
                    quantity: 1
                })
            }
            return {
                ...state,
                selectedItems: [...state.selectedItems]
            }
        case "REMOVE_ITEM":
            const newSelectedItems = state.selectedItems.filter(item =>item.id !== action.payload.id);
            return {
                ...state,
                selectedItems:[...newSelectedItems]
            }

    }
}
const CartContextProvider = () => {

    const [ state , dispatch ] = useReducer(cartReducer , initialstate)

    return (
        <div>
            
        </div>
    );
};

export default CartContextProvider;