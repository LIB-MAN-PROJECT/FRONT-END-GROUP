import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const baseEnd = `https://btl-products-api.onrender.com/products/${id}`;

  const fetchBook = async () => {
    const response = await fetch(baseEnd, { method: "GET" });
    const data = await response.json();
    setBook(data);
  };

  useEffect(() => {
    fetchBook();
  }, []);

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <img src={book.image} alt={book.title} />
      <p>{book.id}</p>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <p>{book.price}</p>
    </div>
  );
};

export default BookDetails;
