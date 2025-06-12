import { Link } from "react-router-dom";
import PagesLayouts from "../layouts/PagesLayouts";
import { useState, useEffect } from "react";
import BookCard from "../components/BookCard";

const Books = () => {
  const baseEnd = "https://library-management-api-backup.onrender.com/books";
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchProducts = async () => {
    try {
      const response = await fetch(baseEnd);
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredBooks = books.filter((book) => {
    const lowerSearch = searchTerm.toLowerCase();
    return (
      book.title.toLowerCase().includes(lowerSearch) ||
      book.description.toLowerCase().includes(lowerSearch) ||
      book.price.toString().includes(lowerSearch)
    );
  });

  return (
    <PagesLayouts>
      <br />
      <div className="pages-layout py-12 px-6 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-6 text-center">
            Explore Our Book Collection
          </h2>
          <br />
          <input
            type="text"
            placeholder="Search books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 p-3 rounded-xl mb-8 bg-white text-black border border-gray-300 shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <br />
          {filteredBooks.length === 0 ? (
            <p className="text-center text-gray-400 mt-4">
              No books found.Try searching by title,price or published year
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
              {filteredBooks.map((book) => (
                <Link to={`/books/${book.id}`} key={book.id}>
                  <BookCard
                    bookImg={book.bookImg}
                    id={book.id}
                    title={book.title}
                    author={book.author}
                    genre={book.genre}
                  />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </PagesLayouts>
  );
};

export default Books;
