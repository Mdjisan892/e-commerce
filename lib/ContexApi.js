'use client'
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState([]);

    const addCart = (product) => {
        setCartItem((prevItems) => {
            const existingProductItem = prevItems.findIndex(item => item.id === product.id)
            const quantityChange = product.quantity || 1;

        if (existingProductItem >= 0) {
            const updateItems = prevItems.map((item, index) => 
                 index === existingProductItem ? { ...item, quantity: Math.max(item.quantity + quantityChange, 0) } : item
                );

            return updateItems.filter(item => item.quantity > 0);
            } else if (quantityChange > 0) {
                return [...prevItems, { ...product, quantity: quantityChange }]
            }
            return prevItems
        })
    };

    return (
        <CartContext.Provider value={{ cartItem, addCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);