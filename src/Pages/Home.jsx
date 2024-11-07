import { useState } from "react";
import Banner from "../components/Banner.jsx";
import BookList from "../components/book/BookList.jsx";
import Location from "./Location.jsx";
import LoginModal from "../components/LoginModal.jsx";

const Home = () => {
  const [state, setState] = useState(null);
  const [loginView, setLoginView] = useState(false);

  const handleLocation = (location) => {
    setState(location);
  };

  const handleOpenLoginView = () => {
    setLoginView(true);
  };
  const handleCloseLoginView = () => {
    setLoginView(false);
  };

  if (state === null) {
    return (
      <div className="h-[500px]  w-full mx-auto pt-52 bg-opacity-15 z-10  bg-[url('https://i.pinimg.com/564x/cb/be/72/cbbe720dfad485f4aa2f561959abb7b8.jpg')] relative after:absolute after:w-full after:h-full after:inset-0 after:bg-white  after:-z-10 after:bg-opacity-80">
        <Location handleLocation={handleLocation} />
      </div>
    );
  }

  return (
    <div className=" bg-opacity-15 z-10  bg-[url('https://i.pinimg.com/564x/cb/be/72/cbbe720dfad485f4aa2f561959abb7b8.jpg')] relative after:absolute after:w-full after:h-full after:inset-0 after:bg-white  after:-z-10 after:bg-opacity-80">
      <Banner handleOpenLoginView={handleOpenLoginView} />
      <BookList />
      {loginView && <LoginModal handleCloseLoginView={handleCloseLoginView} />}
    </div>
  );
};

export default Home;
