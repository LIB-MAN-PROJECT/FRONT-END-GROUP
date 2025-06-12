import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import PagesLayouts2 from "../../layouts/PagesLayouts2";
import BookCard from "../../components/BookCard";

const BooksAdmin= () => {
  const baseEnd = "https://btl-products-api.onrender.com/products";
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
    <PagesLayouts2>
      <br />
      <div className="pages-layout py-12 px-6 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-6 text-center">
            Find Entire Book Catalogue
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
            <p className="text-center text-gray-400 mt-4">No books found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
              {filteredBooks.map((book) => (
                <Link to={`/books-admin/${book.id}`} key={book.id}>
                  <BookCard
                    image={book.image}
                    id={book.id}
                    title={book.title}
                    description={book.description}
                    price={book.price}
                    
                  />
                  
                </Link>
                
              ))}
            </div>
          )}
        </div>
      </div>
    </PagesLayouts2>
  );
};

export default BooksAdmin;
