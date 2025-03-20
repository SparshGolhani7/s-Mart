import React, { useContext, useEffect, useState } from 'react';
import { AllContext } from '../context/AllContext';
import { DeleteTwoTone } from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';

const MyCart = () => {
    const { increment, decrement, cart, setCart } = useContext(AllContext);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const totalSum = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
        setTotal(totalSum);
    }, [cart]);

    const handleRemoveFromCart = (product) => {
        const updatedCart = cart.filter((item) => item.id !== product.id);
        setCart(updatedCart);
    };

    return (
        <>
            {cart.length === 0 ? (
                <h2 className="empty-cart">🛒 Your Cart is Empty</h2>
            ) : (
                <div className="cartProducts-grid">
                    <AnimatePresence>
                        {cart.map((item) => (
                            <motion.div
                                key={item.id}
                                className="cartProduct-card"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.img
                                    className="cartProduct-image"
                                    src={item.images[0]?.src}
                                    alt={item.name}
                                    whileHover={{ scale: 1.1 }}
                                />
                                <h3 className="cartProduct-name">{item.name}</h3>
                                <p className="cartProduct-price">₹{item.price}</p>
                                <div className="cart-actions">
                                    <div className="cart-qty">
                                        <button onClick={() => decrement(item)}>-</button>
                                        <span className="countForAddToCart1">{item.qty}</span>
                                        <button onClick={() => increment(item)}>+</button>
                                    </div>
                                    <DeleteTwoTone
                                        onClick={() => handleRemoveFromCart(item)}
                                        className="delete-icon"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            )}

            <motion.div
                className="cart-total"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h3>Total: ₹{total}</h3>
                <motion.button
                    className="checkout-btn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Checkout
                </motion.button>
            </motion.div>
        </>
    );
};

export default MyCart;

