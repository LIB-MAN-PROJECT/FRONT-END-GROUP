import { Link } from "react-router-dom";
import PagesLayouts from "../layouts/PagesLayouts";
import { useState, useEffect } from "react";
import BookCard from "../components/BookCard";

const Books = () => {
  // fetch your products from the API
  const baseEnd = "https://btl-products-api.onrender.com/products";
  const [books, setBooks] = useState([]);
  const fetchProducts = async () => {
    try {
      const response = await fetch(baseEnd, { method: "GET" });
      console.log(response);
      const data = await response.json();
      console.log(data);
      setBooks(data);
    } catch (error) {
      console.log(error);
    }
    // finally {
    //   console.log("");
    // }
  };
  useEffect(() => {
    fetchProducts();
  }, []); // Add empty dependency array
  const [searchTerm, setSearchTerm] = useState("");
  const filteredBooks = books.filter((book) => {
    const lowerSearch = searchTerm.toLowerCase();
    return (
      book.title.toLowerCase().includes(lowerSearch) ||
      book.description.toLowerCase().includes(lowerSearch) ||
      book.price.toString().includes(lowerSearch)
    );
  });

  {
    filteredBooks.length === 0 && <p>No books found.</p>;
  }

  return (
    <PagesLayouts>
      <div>
+        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {filteredBooks.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No books found.</p>
      )}
      <div className="product-container flex flex-row gap-y-6">
        {/* {books.map(book)} */}
        {filteredBooks.map((book) => (
          <Link to={`/books/${book.id}`} key={book.id}>
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
    </PagesLayouts>
  );
};

export default Books;
