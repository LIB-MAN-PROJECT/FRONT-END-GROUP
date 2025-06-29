import { useNavigate } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import PagesLayouts2 from "../../layouts/PagesLayouts2";

function Books2() {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
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
      setBooks(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.genre?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleReset = () => setSearchQuery("");

  return (
    <PagesLayouts2>
      {/* Spacer for fixed navbar */}
      <div className="h-16 sm:h-20 md:h-24"></div>

      <section className="pages-layout px-4 py-10 bg-gray-50 min-h-screen pb-32">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Discover Our Books
        </h1>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
          <input
            type="text"
            placeholder="Search by title, author, or genre..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-96 px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <button
            onClick={handleReset}
            className="px-4 py-2 text-white rounded-xl hover:bg-red-600 transition"
          >
            Reset
          </button>
        </div>

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => navigate(`/books/${book.id}`)}
              >
                <img
                  src={book.bookImg}
                  alt={book.title}
                  className="w-full h-64 object-cover rounded-t-xl"
                />
                <div className="p-4 space-y-2">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {book.title}
                  </h2>
                  <p className="text-sm text-red-500">by {book.author}</p>
                  <p className="text-sm text-gray-600">
                    Genre: {book.genre || "N/A"}
                  </p>
                  <p className="text-sm text-gray-600">
                    Publisher: {book.publisher}
                  </p>

                  <button
                    className="mt-4 w-full py-2 bg-black text-white rounded-md hover:bg-red-600"
                    onClick={(e) => {
                      e.stopPropagation(); // prevent card navigation
                      handleDelete(book.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </PagesLayouts2>
  );
}

export default Books2;
