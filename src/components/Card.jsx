import { useState } from "react"
import '../styles/card.css'

export const Card = ({ image, title, description, price, handleAdd, handleRemove }) => {

    const [added, setAdded] = useState(false)

    const addItem = () => {
        handleAdd()
        setAdded(true)
    }

    const removeItem = () => {
        handleRemove()
        setAdded(false)
    }

    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
                <p className="card-price">Price: {price}$</p>

                {added
                    ? <button
                        type="button"
                        className="button-remove"
                        onClick={removeItem}
                    >
                        Remove Item from Cart
                    </button>
                    : <button
                        type="button"
                        className="button-add"
                        onClick={addItem}
                    >
                        Add Item to Cart
                    </button>
                }
            </div>
        </div>
    )
}
