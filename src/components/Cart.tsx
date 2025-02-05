import { useStore } from "@/Store/usestore";


export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useStore(); // Access Zustand store

  return (
    <div className="cart p-4">
      <h3 className="text-2xl font-bold mb-4">Your Cart</h3>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <li
              key={item._id}
              className="cart-item flex justify-between items-center border-b pb-2"
            >
              <span className="text-lg">
                {item.name} - ${item.price}
              </span>
              <button
                onClick={() => removeFromCart(item._id as string)} // Assert `_id` is a string
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <button
          onClick={clearCart}
          className="clear-cart-button mt-6 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Clear Cart
        </button>
      )}
    </div>
  );
}
