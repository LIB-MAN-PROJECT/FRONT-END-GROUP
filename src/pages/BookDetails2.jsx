import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const BookDetails2 = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  const Filter = async () => {
    try {
      const response = await fetch("https://btl-products-api.onrender.com/products");
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

  if (loading) return <p>Loading book details...</p>;
  if (!book) return <p>Book not found.</p>;

  return (
    <div>
        <Navbar/>
      <img src={book.image} alt={book.title} />
      <p>ID: {book.id}</p>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <p>{book.price}</p>
      <button>
        <Link to ="/books"> Back to Book List!
        </Link>
      </button>
    </div>
  );
};

export default BookDetails2;
