import React, { useEffect, useState } from "react";
import PagesLayouts from "../layouts/PagesLayouts";
import axios from "axios";

const Test = () => {
  const [loading, setLoading] = useState(false);

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://back-end-o4em.onrender.com/books"
      );
      const data = await res.json();
      console.log(data);
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

      {loading ? <p>Loading...</p> : <h2>Data is ready</h2>}
    </PagesLayouts>
  );
};

export default Test;
