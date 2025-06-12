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
      element: <Landing />,
    },
     {
      path: "/admin",
      element: <Landing2 />,
    },

    { path: "/admin-panel", element: <Navbar2 /> },
    { path: "/about-us", element: <About /> },
    {
      path: "/books/:id",
      element: <BookDetails2 />,
    },
    {
      path: "/books-admin/:id",
      element: <BookDetailsAdmin/>,
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
  ]);

  return <RouterProvider router={router} />;
}
export default App;
