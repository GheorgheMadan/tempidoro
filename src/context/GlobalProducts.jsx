import { createContext, useContext } from "react";
import useProducts from "../hook/useProducts";
import useFav from "../hook/useFav";
import useFilterCategoryList from "../hook/useFilterCategoryList";

const GlobalProductsContext = createContext();

export default function GlobalProductsProvider({ children }) {

    const items = useProducts();
    const favItems = useFav()
    const list = useFilterCategoryList()

    return (
        <GlobalProductsContext.Provider value={{ ...items, ...favItems, ...list }}>
            {children}
        </GlobalProductsContext.Provider>
    )
}

export const useGlobalProducts = () => {
    const context = useContext(GlobalProductsContext);
    if (!context) {
        throw new Error("useGlobalProducts must be used within a GlobalProductsProvider");
    }
    return context;
}