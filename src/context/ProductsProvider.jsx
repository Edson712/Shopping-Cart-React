import { useEffect, useState } from "react"
import { ProductsContext } from "./ProductsContext"

export const ProductsProvider = ({ children }) => {

    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setProducts(data)
    }

    useEffect(() => {
        fetchProducts()

    }, [])

    return (
        <ProductsContext.Provider value={{products}}>
            {children}
        </ProductsContext.Provider>
    )
}
