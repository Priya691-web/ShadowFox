import React from 'react'

function FilterSort({ setFilter, setSort }) {
  return (
    <div className="flex gap-4 mb-4">
      <select
        onChange={(e) => setFilter(e.target.value)}
        className="border px-2 py-1 rounded"
      >
        <option value="All">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
        <option value="Books">Books</option>
      </select>

      <select
        onChange={(e) => setSort(e.target.value)}
        className="border px-2 py-1 rounded"
      >
        <option value="">Sort By</option>
        <option value="low">Price: Low → High</option>
        <option value="high">Price: High → Low</option>
      </select>
    </div>
  )
}

export default FilterSort
