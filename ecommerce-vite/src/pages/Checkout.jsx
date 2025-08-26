import React from 'react'

function Checkout({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <form className="space-y-4 max-w-md">
        <input type="text" placeholder="Name" className="border p-2 w-full rounded" />
        <input type="text" placeholder="Address" className="border p-2 w-full rounded" />
        <input type="text" placeholder="Phone" className="border p-2 w-full rounded" />
        <h3 className="font-bold">Order Total: ₹{total}</h3>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Place Order
        </button>
      </form>
    </div>
  )
}

export default Checkout
