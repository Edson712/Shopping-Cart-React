import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const CartPage = () => {

    const { shopList, addQuantity, lowerQuantity, removeItem } = useContext(CartContext)

    const calcTotal = () => {
        return shopList.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
    }

    const handlePrint = () => {
        print()
    }

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        shopList.map(item => (
                            <tr key={item.id}>
                                <th>{item.title}</th>
                                <td>{item.price}</td>
                                <td>
                                    <button
                                        className='btn btn-ouline-primary'
                                        onClick={() => lowerQuantity(item.id)}
                                    >-</button>
                                    <button
                                        className='btn btn-primary'
                                    >{item.quantity}</button>
                                    <button
                                        className='btn btn-ouline-primary'
                                        onClick={() => addQuantity(item.id)}
                                    >+</button>
                                </td>
                                <td><button
                                    type='button'
                                    className='btn btn-danger'
                                    onClick={() => removeItem(item.id)}
                                >
                                    Remove
                                </button></td>
                            </tr>
                        ))
                    }
                    <th><b>TOTAL: </b></th>
                    <td></td>
                    <td></td>
                    <td>${calcTotal()}</td>
                </tbody>
            </table>
            <div className='d-grid gap-2'>
                <button
                    className='btn btn-primary'
                    onClick={handlePrint}
                    disabled={shopList < 1}
                >Buy</button>
            </div>
        </>
    )
}
