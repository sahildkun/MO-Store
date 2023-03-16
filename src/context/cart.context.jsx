import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();




export const CartProvider =({children}) => {
    const [showSidebar, setShowSidebar] = useState(false);
    
    const value = {showSidebar, setShowSidebar}

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}