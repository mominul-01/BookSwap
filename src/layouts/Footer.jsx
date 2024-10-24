import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="flex flex-col md:flex-row md:space-x-6 text-gray-600 text-center md:text-left">
          <div className="flex flex-col">
            <Link to="/contacts" className="mb-2 p-3 md:mb-0 hover:text-gray-900">
              Contacts
            </Link>
            <Link
              to="/terms-of-use"
              className="mb-2 p-3 md:mb-0 hover:text-gray-900"
            >
              Terms of Use
            </Link>
          </div>

          <div className="border-r-2 my-5 border-gray-300"></div>
          <div className="flex flex-col ">
            <Link
              to="/privacy-policy"
              className="mb-2 p-3 md:mb-0 hover:text-gray-900"
            >
              Privacy Policy
            </Link>
            <Link to="/help" className="p-3 hover:text-gray-900">
              Help
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:space-x-4 text-center md:text-right">
          <div className="flex space-x-3 mb-3 md:mb-0">
            <a href="#" className="p-3 hover:text-gray-900 ">
              <FaInstagram className="h-8 w-6" />
            </a>
            <a href="#" className="p-3 hover:rounded-full hover:bg-white ">
              <FaFacebookF className="h-8 w-6" />
            </a>
            <a href="#" className="p-3 hover:text-gray-900">
              <FaTiktok className="h-8 w-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center text-gray-500 text-md">
        All rights reserved © 2024 BookSwap
      </div>
    </footer>
  );
};

export default Footer;
