const BookCard = ({ image, title, description, price }) => {
  return (
    <div className="bg-white text-gray-800 rounded-xl shadow hover:shadow-lg transition-all p-4 max-w-[250px] flex flex-col gap-2">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="text-lg font-semibold">{title}</h3>
      {/* <p className="text-sm text-gray-600 line-clamp-3">{description}</p> */}
      <span className="text-pink-700 font-semibold">₵{price}</span>
    </div>
  );
};
export default BookCard