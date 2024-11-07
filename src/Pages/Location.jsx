import React, { useState } from "react";
const Location = ({ handleLocation }) => {
  const [location, setLocation] = useState("");

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const clearInput = () => {
    setLocation("");
  };

  const findBooks = () => {
    console.log(`Searching for food in: ${location}`);
    handleLocation(location);
    // Add your search logic here
  };

  return (
    <div className="flex items-center max-w-md p-5 mx-auto bg-gray-100 rounded-lg shadow-md">
      <input
        type="text"
        placeholder="Your Location"
        value={location}
        onChange={handleInputChange}
        className="flex-grow px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
      {location && (
        <button
          onClick={clearInput}
          className="p-1 ml-2 text-gray-500 hover:text-red-600 focus:outline-none"
        >
          ✕
        </button>
      )}
      <button
        onClick={findBooks}
        className="px-4 py-2 ml-2 text-white bg-pink-500 rounded-lg hover:bg-pink-600 focus:outline-none"
      >
        Find Books
      </button>
    </div>
  );
};

export default Location;
