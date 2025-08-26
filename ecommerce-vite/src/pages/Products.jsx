import React, { useState } from 'react'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import FilterSort from '../components/FilterSort'

function Products({ addToCart }) {
  const [filter, setFilter] = useState("All")
  const [sort, setSort] = useState("")

  let filteredProducts = [...products]

  if (filter !== "All") {
    filteredProducts = filteredProducts.filter((p) => p.category === filter)
  }

  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price)
  } else if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price)
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <FilterSort setFilter={setFilter} setSort={setSort} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  )
}

export default Products
