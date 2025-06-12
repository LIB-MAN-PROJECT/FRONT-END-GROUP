import { useState } from "react";

const BookFormModal = ({ onClose }) => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newBook = {
      title,
      description,
      price: Number(price),
      image,
      brand,
      category,
      ratings: Number(ratings),
    };

    try {
      const response = await fetch(
        "https://btl-products-api.onrender.com/products",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newBook),
        }
      );

      const responseData = await response.json();
      if (response.ok) {
        alert("Book added successfully!");
        onClose(); // close popup
      } else {
        alert("Something went wrong.");
      }
    } catch (error) {
      alert("Network error.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-xl font-bold mb-4">Add New Book</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />
          <input
            type="number"
            placeholder="Ratings"
            value={ratings}
            onChange={(e) => setRatings(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            className="w-full border p-2 rounded"
          ></textarea>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookFormModal;
