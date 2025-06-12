const BookCard = ({ bookImg, title, author, genre }) => {
  return (
    <div className="bookcard bg-white text-gray-800 rounded-xl shadow hover:shadow-lg transition-all p-4 max-w-[250px] flex flex-col gap-2">
      <img
        src={bookImg}
        alt={title}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="text-lg font-semibold">{title}</h3>
      {/* <p className="text-sm text-gray-600 line-clamp-3">{description}</p> */}
      <span className="text-pink-700 font-semibold">{author}</span>
      <span className="text-pink-700 font-semibold">{genre}</span>
      
    </div>
  );
};
export default BookCard;


// {/* <button onClick={()=>handleDelete(book.id)}> Delete</button> */ and then before fetching Books,create a function called handle delete
//   const handleDelete = async()=>{
//     try {
//       const res = await axios.delete(`and specify the path for getting a single id `)
      
//     } catch (error) {
//       console.log('ERROR');
      
//     }
//   };
// }
