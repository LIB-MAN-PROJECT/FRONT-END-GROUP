import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router";

const BookDetails2 = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState({});

  const fetchSingleBook = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://library-management-api-backup.onrender.com/books/${id}`
      );
      setBook(res.data.findBook);
    } catch (error) {
      console.error("Error fetching book:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSingleBook();
  }, []);

  return (
    <section className="books min-h-screen px-4 py-10 bg-gray-200 text-gray-800">
      {loading ? (
        <p className="text-center text-lg">Loading...</p>
      ) : (
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Book Cover */}
          <div className="flex justify-center">
            <img
              src={book.bookImg}
              alt={book.title}
              className="w-full max-w-sm rounded shadow-lg object-cover"
            />
          </div>

          {/* Book Details */}
          <div className="space-y-4 ">
            <h1 className="text-3xl font-bold">{book.title}</h1>
            <p>
              <span className="font-semibold">Author:</span> {book.author}
            </p>
            <p>
              <span className="font-semibold">Publisher:</span> {book.publisher}
            </p>
            <p>
              <span className="font-semibold">Genre:</span> {book.genre}
            </p>
            <p>
              <span className="font-semibold">Year:</span>{" "}
              {book.publication_year}
            </p>
            <p>
              <span className="font-semibold">Rating:</span> {book.rating}
            </p>
            <p>
              <span className="font-semibold">Summary:</span>{" "}
              {book.summary || "No summary provided."}
            </p>
            <br />
            <br />

            <p><Link to ="/booksadm">Back to Book List</Link></p>
          </div>
        </div>
      )}
    </section>
  );
};

export default BookDetails2;
