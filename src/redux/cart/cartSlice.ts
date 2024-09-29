import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, Product } from '../../Interfaces/Interfaces';



interface CartState {
    cartItems: CartItem[];
    totalAmount: number;
}


const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('cart');
        return serializedState ? JSON.parse(serializedState) : { cartItems: [], totalAmount: 0 };
    } catch (e) {
        return { cartItems: [], totalAmount: 0 };
    }
};


const saveToLocalStorage = (state: CartState) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('cart', serializedState);
    } catch (e) {
        console.error('Could not save cart to local storage:', e);
    }
};


const initialState: CartState = loadFromLocalStorage();

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Product>) => {
            const item = state.cartItems.find(i => i.product.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            } else {
                
                state.cartItems.push(<CartItem>{product:action.payload,quantity:1});
            }
            state.totalAmount += action.payload.price;
            saveToLocalStorage(state);
        },
        decrementItem: (state, action: PayloadAction<Product>) => {
            const item = state.cartItems.find(i => i.product.id === action.payload.id);
            if (item) {
                
                item.quantity -= 1;
                if (item.quantity === 0) {
                    cartSlice.caseReducers.removeItem(state, { payload: item, type: removeItem.type });
                }
            }
            state.totalAmount -= action.payload.price;
            saveToLocalStorage(state);
        },
        removeItem: (state, action: PayloadAction<CartItem>) => {
            const remainingCartItems = state.cartItems.filter(item => item.product.id !== action.payload.product.id);
            state.totalAmount -= action.payload.product.price * action.payload.quantity;
            state.cartItems = remainingCartItems;
            saveToLocalStorage(state);
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.totalAmount = 0;
            saveToLocalStorage(state);
        }
    },
});

export const { addItem, decrementItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
