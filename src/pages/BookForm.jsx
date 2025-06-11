import { useState } from "react";
import Navbar from "../components/Navbar";

const BookForm = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState("");

  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const newBook = {
      title,
      description,
      price: Number(price),
      image,
      brand,
      category,
      ratings: Number(ratings),
    };

    console.log("Submitting newBook:", newBook);

    try {
      const response = await fetch(
        "https://btl-products-api.onrender.com/products",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newBook),
        }
      );

      const responseData = await response.json();
      console.log("API response:", response.status, responseData);

      if (response.ok) {
        alert("Book added successfully!");
        setTitle("");
        setDescription("");
        setPrice("");
        setImage("");
      } else {
        alert("Something went wrong while adding the book.");
      }
    } catch (error) {
      console.error("Error adding book:", error);
      alert("Network error or server issue.");
    }
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title
          <br />
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Enter Product name"
            required
          />{" "}
        </label>
        <br />
        <label htmlFor="brand">
          Brand
          <br />
          <input
            type="text"
            id="brand"
            value={brand}
            onChange={(event) => setBrand(event.target.value)}
            placeholder="Enter Product name"
            required
          />{" "}
        </label>
        <br />
        <label htmlFor="category">
          Category
          <br />
          <input
            type="text"
            id="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            placeholder="Enter Product name"
            required
          />{" "}
        </label>
        <br />

        <label htmlFor="description">
          Description
          <br />
          <textarea
            name=""
            id="description"
            rows="4"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Give a brief description of the product"
          ></textarea>
        </label>
        <br />

        <label htmlFor="image">
          Image Url
          <br />
          <input
            type="text"
            id="image"
            value={image}
            onChange={(event) => setImage(event.target.value)}
            required
            placeholder="Insert your image's url here"
          />{" "}
        </label>
        <br />

        <label htmlFor="price">
          Price
          <br />
          <input
            type="number"
            id="price"
            required
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </label>
        <br />
        <label htmlFor="ratings">
          Ratings
          <br />
          <input
            type="number"
            id="ratings"
            required
            value={ratings}
            onChange={(event) => setRatings(event.target.value)}
          />
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
//     </div>
  );
};

export default BookForm;
