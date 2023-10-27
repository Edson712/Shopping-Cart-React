import { useContext } from "react"
import { Card } from "../components/Card"
import { ProductsContext } from "../context/ProductsContext"
import { CartContext } from "../context/CartContext"

export const ShopPage = () => {

    const { products } = useContext(ProductsContext)

    const { addItem, removeItem } = useContext(CartContext)

    const handleAdd = (shop) => {
        addItem(shop)
    }
    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <>
            <h1>Shop: </h1>
            <hr />

            {products.map(product => (
                <Card
                    key={product.id}
                    image={product.image}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    handleAdd={() => handleAdd(product)}
                    handleRemove={() => handleRemove(product.id)}
                >

                </Card>
            ))}
        </>
    )
}
