import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookDetails from "./components/book/BookDetails.jsx";
import BookOwnerInfo from "./components/book/BookOwnerInfo.jsx";
import Cart from "./components/navbar/Wishlists.jsx";
import Messages from "./components/navbar/Messages.jsx";
import Notification from "./components/navbar/Notification.jsx";
import Profile from "./components/navbar/Profile.jsx";
import "./index.css";
import Layouts from "./layouts/Layouts.jsx";
import Contacts from "./Pages/Contacts.jsx";
import Help from "./Pages/Help.jsx";
import Home from "./Pages/Home.jsx";
import PrivacyPolicy from "./Pages/PrivacyPolicy.jsx";
import TermsOfUse from "./Pages/TermsOfUse.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      { path: "", element: <Home /> },
      { path: "profile", element: <Profile /> },
      {
        path: "/messages",
        element: <Messages />,
      },
      {
        path: "/notifications",
        element: <Notification />,
      },
      {
        path: "/wishlists",
        element: <Cart />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/terms-of-use",
        element: <TermsOfUse />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/profile",
        element: <BookOwnerInfo />,
      },

      {
        path: "/account",
        element: <h1>Account</h1>,
      },
      {
        path: "/dashBoard",
        element: <h1>DashBoard</h1>,
      },
      {
        path: "/logout",
        element: <h1>Logout</h1>,
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
      },

      // Add more routes here
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
