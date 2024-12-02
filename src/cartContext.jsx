import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children })=> {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart'));
        if (storedCart) {
            setCart(storedCart);
        }
    },[])
    const addToCart = (product)=>{
        setCart((prevCart) => {
            const updatedCart = [...prevCart, product];
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        });

    }

    const removeFromCart = (productId) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.filter((item) => item.id != productId);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        })
    }

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    );
}

// hook for using the cart context
export const useCart = () => {
    const cartContext = useContext(CartContext)
    
    return cartContext;
}    