import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const BookDetails3 = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  const Filter = async () => {
    try {
      const response = await fetch(
        "https://btl-products-api.onrender.com/products"
      );
      const data = await response.json();
      const matchedBook = data.find((item) => item.id.toString() === id);
      setBook(matchedBook);
    } catch (error) {
      console.error("Failed to fetch book:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    Filter();
  }, [id]);

  if (loading)
    return <p className="text-center text-gray-400">Loading book details...</p>;
  if (!book) return <p className="text-center text-red-500">Book not found.</p>;

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`full-${i}`} className="text-yellow-500 text-xl">
          ★
        </span>
      );
    }

    if (halfStar) {
      stars.push(
        <span key="half" className="text-yellow-500 text-xl">
          ✩
        </span>
      );
    }

    // Fill up to 5 stars
    while (stars.length < 5) {
      stars.push(
        <span key={`empty-${stars.length}`} className="text-gray-300 text-xl">
          ★
        </span>
      );
    }

    return stars;
  };

  return (
    <div className=" bookdetails min-h-screen py-12 px-6 bg-gray-100">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:flex">
        {/* Image Section */}
        <div className="md:w-1/2 flex items-center justify-center p-6 bg-gray-50">
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-auto object-contain rounded-lg max-h-96"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {book.title}
          </h1>
          <p className="text-gray-600 mb-2">
            <strong>ID:</strong> {book.id}
          </p>
          <p className="text-gray-700 mb-4">{book.description}</p>
          <p className="text-pink-600 text-lg font-semibold mb-4">
            ${book.price}
          </p>
          {book.brand && (
            <p className="text-gray-500 mb-2">
              <strong>Brand:</strong> {book.brand}
            </p>
          )}
          {book.category && (
            <p className="text-gray-500 mb-2">
              <strong>Category:</strong> {book.category}
            </p>
          )}
          {book.ratings && (
            <div className="flex items-center gap-2 mb-4">
              <span className="font-medium text-gray-600">Rating:</span>
              <div className="flex">{renderStars(book.ratings)}</div>
              <span className="text-sm text-gray-500">({book.ratings})</span>
            </div>
          )}
          <br />
          <Link
            to="/books"
            className="inline-block  hover:underline text-black font-bold py-2 px-4 rounded transition duration-200"
          >
            Back to Entire Vault
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetails3;
