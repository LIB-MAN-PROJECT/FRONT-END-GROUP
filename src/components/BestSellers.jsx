import React from "react";

const bestSellers = [
  {
    id: 1,
    title: "The Midnight Library",
    genre: "Fantasy / Fiction",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    title: "Atomic Habits",
    genre: "Self-Help / Psychology",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1581092915554-7d0cdcf6a732?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    title: "Where the Crawdads Sing",
    genre: "Mystery / Drama",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    title: "Educated",
    genre: "Memoir / Biography",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    title: "It Ends With Us",
    genre: "Romance / Drama",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1586489946307-8cb13d5b4a6c?auto=format&fit=crop&w=500&q=80",
  },
];

const BestSellers = () => {
  return (
    <section className="py-12 px-4 md:px-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Best Sellers</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {bestSellers.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{book.title}</h3>
              <p className="text-gray-500 text-sm">{book.genre}</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500 text-lg">★</span>
                <span className="ml-1 font-medium">{book.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
