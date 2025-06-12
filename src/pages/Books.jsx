import { useNavigate } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import PagesLayouts from "../layouts/PagesLayouts";

function Books() {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `https://library-management-api-backup.onrender.com/books/${id}`
      );
      alert(res.data.message);
      fetchBooks();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://library-management-api-backup.onrender.com/books"
      );

      console.log(res.data);
      setBooks(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <PagesLayouts>
      <h1>All Books</h1>
      <div className="p-10 bg-gray">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Discover our books
        </h1>
        {loading ? (
          <p className="w-full flex justify-center">Loading....</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative">
            {books.map((book) => (
              <div
                key={book.id}
                className="w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl border-white"
              >
                <img
                  src={book.bookImg}
                  alt="book-image"
                  className="h-40 w-full object-cover"
                />
                <div className="p-5">
                  <h2 className="text-xl font-bold text-gray-800">
                    {book.title}
                  </h2>

                  <p className="text-red-500 mt-1">by {book.author}</p>
                  {book.genre && (
                    <p className=" text-sm text-black"> Genre: {book.genre}</p>
                  )}
                  <p className="mt-2 text-bold text-blue-800">
                    Published: {book.year}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      className="mt-1 px-4 py-2 bg-red-400 text-white rounded-lg w-full"
                      onClick={() => navigate(`/books/${book.id}`)}
                    >
                      View Details
                    </button>
                    <button
                      className="mt-1 px-6 py-2 bg-black text-white rounded-lg w-full"
                      onClick={() => handleDelete(book.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </PagesLayouts>
  );
}

export default Books;
