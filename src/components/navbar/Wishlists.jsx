import { useEffect, useState } from "react";
import BookItem from "../book/BookItem";

const Wishlists = () => {
  const [wishlist, setWishlist] = useState([]);

  // Load wishlist from localStorage
  const loadWishlist = () => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  };

  useEffect(() => {
    loadWishlist();
  }, []);

  // Update wishlist if the item is added or removed
  const updateWishlist = () => {
    loadWishlist();
  };

  return (
    <div className="container min-h-[600px]">
      <h1 className="text-4xl text-red-700 font-bold capitalize text-center my-10 ">
        My Wishes
      </h1>

      {wishlist.length === 0 ? (
        <p className=" text-3xl text-center font-bold m-6">
          Add your WishList ....{" "}
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 m-10">
          {wishlist.map((book) => (
            <BookItem
              key={book.id}
              book={book}
              onWishlistChange={updateWishlist}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlists;
