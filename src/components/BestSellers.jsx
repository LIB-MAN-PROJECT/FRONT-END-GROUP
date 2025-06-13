
import  { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BestSellers = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://library-management-api-backup.onrender.com/books")
      .then((response) => {
        setBooks(response.data.slice(0, 4)); // Pick the first 4 books
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch best sellers.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center py-8 text-gray-500">Loading best sellers...</p>;
  if (error) return <p className="text-center py-8 text-red-500">{error}</p>;

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10"> Our Best Sellers</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {books.map((book) => (
          <Link
            key={book._id}
            to={`/books/${book._id}`}
            className="block bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden transform hover:-translate-y-1"
          >
            <img
              src={book.bookImg}
              alt={book.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{book.title}</h3>
              <p className="text-sm text-gray-600">{book.author}</p>
             
            </div>
          </Link>
          
        ))}
      </div>
      <br />
      <br />
      <br />
      <p className="hover:underline"> <Link to ="/about-us">BACK TO ABOUT US SECTION</Link></p>
    </div>
  );
};

export default BestSellers;
