import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../pages/style.css"

const Edit = () => {
  const navigate = useNavigate();

  const params = useParams();

  const [book, setBook] = useState({});
  const [formData, setFormData] = useState({});

  // State to show/hide the success message
  const [showSuccess, setShowSuccess] = useState(false);
  // State to simulate loading
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async (e) => {
    // prevent form from defaulting
    e.preventDefault();

    console.log(formData);

    const payload = {
      bookImg: formData.bookImg ?? book?.bookImg,
      title: formData.title ?? book?.title,
      genre: formData.genre ?? book?.genre,
      author: formData.author ?? book?.author,
      summary: formData.summary ?? book?.summary,
      publisher: formData.publisher ?? book?.publisher,
      publication_year: formData.publication_year ?? book?.publication_year,
      rating: formData.rating ?? book?.rating,
    };

    try {
      const res = await axios.put(
        `https://library-management-api-backup.onrender.com/books/${params?.id}`,
        payload
      );
      alert(res.data.message);
      navigate("/books");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleBook();
  }, []);

  return (
    <div className=" body max-w-2xl mx-auto p-3 bg-white rounded-2xl shadow-md space-y-6 border-2">
      {showSuccess && (
        <div style={{ color: "green", marginBottom: "10px" }}>
          edit successfully
        </div>
      )}

      <h2 className="text-2xl font-bold text-gray-800">Edit a Book</h2>
      <form className="space-y-4 " onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            name="bookImg"
            type="text"
            value={formData?.bookImg ?? book.bookImg}
            placeholder="image-url"
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, bookImg: e.target.value };
              })
            }
            className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Book Title"
            value={formData?.title ?? book.title}
            className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm p-2"
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, title: e.target.value };
              })
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Summary
          </label>
          <textarea
            name="summary"
            placeholder="Short summary of the book"
            value={formData?.summary ?? book.summary}
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, summary: e.target.value };
              })
            }
            rows="4"
            className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm p-2"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Author
          </label>
          <input
            name="author"
            type="text"
            value={formData?.author ?? book.author}
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, author: e.target.value };
              })
            }
            placeholder="Author Name"
            className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Publisher
          </label>
          <input
            name="publisher"
            type="text"
            value={formData?.publisher ?? book.publisher}
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, publisher: e.target.value };
              })
            }
            placeholder="Publisher Name"
            className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Year of Publication
          </label>
          <input
            name="publication_year"
            type="number"
            placeholder="2025"
            value={formData?.publication_year ?? book.publication_year}
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, publication_year: e.target.value };
              })
            }
            className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Genre
          </label>
          <input
            name="genre"
            type="text"
            value={formData?.genre ?? book.genre}
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, genre: e.target.value };
              })
            }
            placeholder="e.g., Fiction, Romance"
            className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Rating (1 to 5)
          </label>
          <input
            name="rating"
            type="number"
            value={formData?.rating ?? book.value}
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, rating: e.target.value };
              })
            }
            min="1"
            max="5"
            placeholder="4"
            className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm p-2"
          />
        </div>

        <div className="flex space-x-4">
         
          <button
            type="submit"
            className="w-1/1 bg-blue-600 text-white px-6 p-2 rounded-xl hover:bg-blue-700 transition add-btn"
          >
            Edit
          </button>
          {loading ? "Adding..." : ""}
        </div>
      </form>
    </div>

    // <form className="width-[40] p-20px border-1px rounded-lg border-gray-600">
    //   <div>
    //     <label>Image:</label>
    //     <input type="text" id="Image" required />
    //   </div>

    //   <div>
    //     <label>Title:</label>
    //     <input type="text" id="Title" required />
    //   </div>

    //   <div>
    //     <label>Summary:</label>
    //     <input type="text" id="Summary" required />
    //   </div>

    //   <div>
    //     <label>Author:</label>
    //     <input type="text" id="Name" required />
    //   </div>

    //   <div>
    //     <label>Publisher:</label>
    //     <input type="text" id="name" required />
    //   </div>

    //   <div>
    //     <label>Year of Publisher:</label>
    //     <input type="text" id="date" required />
    //   </div>
    // </form>
  );
};

export default Edit;
