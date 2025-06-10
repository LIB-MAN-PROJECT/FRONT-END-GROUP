

const BookCard = ({ image, title, description, price }) => {
  return (
    <div >
      <img src={image} alt={title} />
      <h2 >{title}</h2>
      {/* <p >{description}</p> */}
      <p >${price}</p>
      <button>Delete</button>
    </div>
  );
};

export default BookCard;
