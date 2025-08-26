import React from 'react'

function ProductCard({ product, addToCart }) {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <h3 className="font-bold text-lg">{product.name}</h3>
      <p className="text-gray-600">{product.category}</p>
      <p className="font-semibold">₹{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
