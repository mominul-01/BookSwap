const BookOwnerInfo = ({ owner }) => {
  console.log(owner);

  const {
    profileImage,
    name,
    location,
    suggestedBooks,
    wantedBooks,
    booksReceived,
    booksSent,
  } = owner;
  return (
    <div className="max-w-4xl p-4 bg-blue-50 shadow-md border rounded-md">
      <h1 className="text-xl font-semibold text-center">
        Book Owner Information
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-center mt-6">
        {/* Profile Section */}
        <div className="flex flex-col items-center md:items-start md:w-1/3 mb-4 md:mb-0">
          <div className="flex items-center gap-4">
            <img
              className="w-24 h-24 rounded-full shadow"
              src={profileImage}
              alt="owner"
            />
            <div className="flex flex-col">
              <h4 className="text-lg font-semibold">{name}</h4>
              <p className="text-md text-blue-400">{location}</p>
            </div>
          </div>
          <button className="bg-teal-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-teal-600">
            Write a message
          </button>
        </div>

        {/* Divider for larger screens */}
        <div className="hidden md:block border-l border-gray-300 h-20 mx-6"></div>

        {/* Information Section */}
        <div className="flex flex-col md:flex-row md:w-2/3 items-center gap-6 md:gap-12">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-gray-600 text-xl">
              Suggested books:{" "}
              <span className="text-blue-600">{suggestedBooks}</span>
            </p>
            <p className="text-gray-600 text-xl">
              Wanted books: <span className="text-blue-600">{wantedBooks}</span>
            </p>
          </div>
          <div className="hidden md:block border-l border-gray-300 h-16"></div>
          <div className="flex flex-col items-center md:items-start">
            <p className="text-gray-600 text-xl">
              Books received:{" "}
              <span className="text-blue-600">{booksReceived}</span>
            </p>
            <p className="text-gray-600 text-xl">
              Books sent: <span className="text-blue-600">{booksSent}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookOwnerInfo;
