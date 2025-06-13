import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import BookForm from "./pages/BookForm";
import Contact from "./pages/Contact";
import Books from "./pages/Books";
import BookDetails2 from "./pages/BookDetails2";
import Navbar2 from "./components/Navbar2";
import About from "./pages/About";
import BooksAdmin from "./pages/userpages/Books2";
import BookDetailsAdmin from "./pages/userpages/BookDetails3";
import Landing2 from "./pages/userpages/Landing2";
import BestSellers from "./components/BestSellers";
import Books2 from "./pages/userpages/Books2";
import Contact2 from "./components/Contact2";
import Edit from "./components/Edit";

function App() {
  const router = createBrowserRouter([
    {
      path: "/bestsellers",
      element: <BestSellers />,
    },
    {
      path: "/books-admin",
      element: <BooksAdmin />,
    },
    {
      path: "/",
      element: <Landing2 />,
    },
    {
      path: "/admin",
      element: <Landing />,
    },

    { path: "/admin-panel", element: <Navbar2 /> },
    { path: "/about-us", element: <About /> },
    {
      path: "/books/:id",
      element: <BookDetails2 />,
    },
    {
      path: "/books-admin/:id",
      element: <BookDetailsAdmin />,
    },

    {
      path: "/book-form",
      element: <BookForm />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },

    {
      path: "/books",
      element: <Books />,
    },
    {
      path: "/booksadm",
      element: <Books2 />,
    },
    {
      path: "/contactsupport",
      element: <Contact2 />,
    },
    {
      path: "/edit-book/:id",
      element: <Edit />,
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
