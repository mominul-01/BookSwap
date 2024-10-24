import { useNavigate } from "react-router-dom";
const BookItem = ({ book }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to book details page with book ID as parameter
    navigate(`/book/${book.id}`);
  };
  return (
    <div
      className="w-[250px] sm:w-full md:w-[250px] xl:w-[350px] mx-auto drop-shadow bg-white overflow-hidden rounded-xl shadow-md  hover:shadow-lg transform hover:scale-105 transition-all duration-300"
      onClick={handleClick}
    >
      <img
        className="w-full h-96 md:h-72 lg:h-96 object-cover"
        src={book.cover}
        alt={book.title}
      />
      <div className="text-center my-4 relative">
        <div className=" absolute -top-12 left-1/2 -translate-x-1/2 inline-block">
          <img
            className="w-16 h-16 rounded-full object-cover border-2 shadow border-white"
            src={book.userpicture}
            alt={book.username}
          />
        </div>
        <h2 className="pt-7 text-xl font-semibold text-gray-900 ">
          {book.username}
        </h2>
        <h3 className="text-gray-600">{book.author}</h3>
      </div>
    </div>
  );
};

export default BookItem;
