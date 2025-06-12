import { useParams } from "react-router";
import PagesLayouts from "../layouts/PagesLayouts";
import { useState, useEffect } from "react";
import axios from "axios";

const BookDetails2 = () => {
  //extract the id from the router params
  const params = useParams();
  console.log(params);

  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState({});

  const fetchSingleBook = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://library-management-api-backup.onrender.com/books/${params?.id}`
      );

      console.log(res.data);
      setBook(res.data.findBook);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSingleBook();
  }, []);

  return (
    <PagesLayouts>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <section id="book-details" className="grid grid-cols-[1fr 1fr]">
          <div className="image">
            <img
              src={book.bookImg}
              alt="book-image"
              className="h-40 w-full object-cover"
            />
          </div>
          <div className="details">
            <p>
              Book Title: <span className="font-medium">{book.title}</span>
            </p>
            <p>
              Author: <span className="font-medium">{book.author}</span>
            </p>
            <p>
              Genre: <span className="font-medium">{book.genre}</span>
            </p>
            <p>
              Description: <span className="font-medium">{book.summary}</span>
            </p>
            {/* <p>
            Published: <span className="font-medium">{book.year}</span>
          </p> */}
          </div>
        </section>
      )}
    </PagesLayouts>
  );
};
export default BookDetails2;
