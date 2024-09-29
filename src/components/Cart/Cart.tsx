import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { addItem, decrementItem, removeItem } from '../../redux/cart/cartSlice';
import classes from './Cart.module.scss';
import shoppingBagIcon from '../../assets/shopping_bag_icon.svg';
import trashIcon from '../../assets/trash_icon.svg';
import minusIcon from '../../assets/minus_icon.svg'; 
import plusIcon from '../../assets/plus_icon.svg';
import { CartItem } from '../../Interfaces/Interfaces';



export const Cart: React.FC = () => {
    const { cartItems, totalAmount } = useSelector((state: RootState) => state.cart);
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    const toggleDropdown = () => setIsOpen((prev) => !prev);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (isOpen && !target.closest(`.${classes.cartDropdown}`)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className={classes.cartContainer}>
            <span onClick={toggleDropdown} className={classes.cartIcon}>
                <img src={shoppingBagIcon} alt="Shopping Bag" className={classes.cartIconImage} />
                <div className={classes.notificationBadge}>{cartItems.length}</div>
            </span>
            {isOpen && (
                <div className={classes.cartDropdown}>
                    <span className={classes.cartTitle}>My Cart</span>
                    <span className={classes.cartSubTitle}>{cartItems.length} item{cartItems.length > 1 ? 's' : ''} in cart</span>

                    {cartItems.length === 0 ? (
                        <span className={classes.emptyCart}>Your cart is empty</span>
                    ) : (
                        <>
                            <div className={classes.cartItems}>
                                {cartItems.map((item: CartItem) => (
                                    <div key={item.product.id} className={classes.cartItem}>

                                        <div className={classes.cartItemQuantityContainer}><div className={classes.cartItemQuantityContainerQuantity}>{item.quantity} x </div></div>
                                        <div className={classes.cartItemImageContainer}>
                                            <img
                                                src={item.product.image}
                                                alt={item.product.title}
                                                className={classes.cartItemImageContainerImage}
                                            />
                                        </div>

                                        <div className={classes.cartItemDetailsContainer}>
                                            <div className={classes.cartItemDetailsContainerTitle}>{item.product.title}</div>
                                            <div className={classes.cartItemDetailsContainerPricing}>
                                                <span className={classes.cartItemDetailsContainerPricingUnitPrice}>Unit Price: ${item.product.price}</span>
                                                <span className={classes.cartItemDetailsContainerPricingPrice}>Total : ${(item.product.price * item.quantity).toFixed(2)}</span>
                                            </div>
                                            <div className={classes.cartItemActions}>
                                                <img
                                                    src={minusIcon}
                                                    alt="Decrement"
                                                    onClick={() => dispatch(decrementItem(item.product))}
                                                    className={classes.actionIcon} // Optional class for styling
                                                />
                                                <img
                                                    src={plusIcon}
                                                    alt="Increment"
                                                    onClick={() => dispatch(addItem(item.product))}
                                                    className={classes.actionIcon} // Optional class for styling
                                                />
                                                {/* <button onClick={() => dispatch(decrementItem(item.product))}>-</button>
                                                <button onClick={() => dispatch(addItem(item.product))}>+</button> */}
                                            </div>


                                        </div>

                                        <div className={classes.cartItemDeleteContainer}>
                                        <img
                                                    src={trashIcon}
                                                    alt="Delete"
                                                    onClick={() => dispatch(removeItem(item))}
                                                    className={classes.actionIcon} // Optional class for styling
                                                />
                                            {/* <button onClick={() => dispatch(removeItem(item))}>✖</button> */}
                                        </div>


                                    </div>




                                ))}

                            </div>
                            <div className={classes.cartSubtotal}>
                                <span className={classes.cartSubtotalText}>Subtotal: </span>
                                <span className={classes.cartSubtotalAmount}>${totalAmount.toFixed(2)}</span>
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};
