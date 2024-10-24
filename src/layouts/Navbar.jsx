import { useState } from "react";
import { BiConversation } from "react-icons/bi";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosMenu, IoMdNotificationsOutline } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";

import { NavLink } from "react-router-dom";
import MessageBox from "../components/navbar/MessagesBox";
import NotificationBox from "../components/navbar/NotificationBox";
import ProfileDropdown from "../components/navbar/ProfileDropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="container bg-white shadow-md px-8 py-4 flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/">
            <span className="text-2xl font-bold text-teal-500 ">BOOKSWAP</span>
          </NavLink>
        </div>

        {/* Search bar */}
        <div className="relative flex items-center w-1/2 h-30">
          <input
            type="text"
            className="w-full h-14 p-2 pl-4 pr-10 text-md border border-gray-200 rounded-full shadow-sm focus:outline-none focus:border-teal-400"
            placeholder="Search for books, authors, publishers or members..."
          />
          <button className="absolute right-2 text-gray-500  ">
            <IoSearch className="h-10 w-8" />
          </button>
        </div>

        {/* Navbar Icons */}
        <div className="hidden lg:flex items-center space-x-6 text-gray-500">
          <NavLink
            to="/cart"
            className={({ isActive }) => (isActive ? "text-teal-500" : "")}
          >
            <button>
              <CiShoppingCart className="h-10 w-8 hover:fill-blue-500 " />
            </button>
          </NavLink>

          {/* <NavLink
            to="/messages"
            className={({ isActive }) => (isActive ? "text-teal-500" : "")}
          >
            <button>
              <BiConversation className="h-10 w-8" />
            </button>
          </NavLink> */}

          {/* <NavLink
            to="/notifications"
            className={({ isActive }) => (isActive ? "text-teal-500" : "")}
          >
            <button>
              <IoMdNotificationsOutline className="h-10 w-8" />
            </button>
          </NavLink> */}
          <MessageBox />
          <NotificationBox />

          {/* Profile */}
          <ProfileDropdown />
        </div>

        {/*MOBILE MENU Icons */}
        {isOpen && (
          <div className="flex flex-col lg:hidden items-center space-x-6 p-5 text-gray-500 bg-white drop-shadow absolute top-[100%] left-0 w-full  divide-y divide-dashed">
            <NavLink to={"/cart"} className="flex items-center">
              <CiShoppingCart className="h-10 w-8 hover:fill-blue-500 " />{" "}
              <span className="mx-2">Cart</span>
            </NavLink>
            <NavLink to="/messages" className="flex items-center">
              <BiConversation className="h-10 w-8" />
              <span className="mx-2">Messages</span>
            </NavLink>
            <NavLink to="/notifications" className="flex items-center">
              <IoMdNotificationsOutline className="h-10 w-8" />{" "}
              <span className="mx-2">Notification</span>
            </NavLink>
            {/* Profile */}

            <NavLink to="/profile">
              <div className="flex items-center space-x-2">
                <button>
                  <RxAvatar className="h-10 w-8" />
                </button>
                <span className="text-md font-medium mx-2">John Doe</span>
              </div>
            </NavLink>
          </div>
        )}

        <div className="block lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {" "}
          <IoIosMenu className="h-10 w-10" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
