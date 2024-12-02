import { useCart } from "../cartContext"

function Cart() {
    const { cart, removeFromCart } = useCart();

    if (cart.length == 0) return <div>Your cart is empty....</div>
    return (
            <div className="cart">
                <h1>Shopping Cart</h1>
                <ul className="added-items">
                {
                    cart.map((item) => (
                        <div key={item.id}>
                            <h3>{item.title}</h3>
                            <p>Price: {item.price}</p>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>
                ))
                    }
                </ul>
            </div>
    )
}

export default Cart;