"use client";

export default function ProductsPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const from = e.target;
    const fromData = new FormData(from)
    const data = Object.fromEntries(fromData)
    console.log(data)
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md mt-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-amber-600">Add Product</h1>
      
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Title */}
        <div className="col-span-1 md:col-span-2">
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
        </div>

        {/* Short Description */}
        <div className="col-span-1 md:col-span-2">
          <label className="block mb-1 font-medium">Short Description</label>
          <input
            type="text"
            name="shortDescription"
            placeholder="Short Description"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
        </div>

        {/* Full Description */}
        <div className="col-span-1 md:col-span-2">
          <label className="block mb-1 font-medium">Full Description</label>
          <input
            type="text"
            name="fullDescription"
            placeholder="Full Description"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 h-28"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block mb-1 font-medium">Price</label>
          <input
            type="number"
            name="price"
            placeholder="Price"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1 font-medium">Category</label>
          <input
            type="text"
            name="category"
            placeholder="Category"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
        </div>

        {/* Priority */}
        <div>
          <label className="block mb-1 font-medium">Priority</label>
          <input
            type="text"
            name="priority"
            placeholder="Priority"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
        </div>

        {/* Stock */}
        <div>
          <label className="block mb-1 font-medium">Stock</label>
          <input
            type="number"
            name="stock"
            placeholder="Stock"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
        </div>

        {/* Image URL */}
        <div className="col-span-1 md:col-span-2">
          <label className="block mb-1 font-medium">Image URL (optional)</label>
          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2">
          <button
            type="submit"
            className="w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-700 transition"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}
