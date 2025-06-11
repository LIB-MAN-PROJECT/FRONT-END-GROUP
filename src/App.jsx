import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import BookDetails from "./pages/BookDetails";
import BookForm from "./pages/BookForm";
import Contact from "./pages/Contact";
import Books from "./pages/Books";
import ClientSide from "./pages/ClientSide";
import BookDetails2 from "./pages/BookDetails2";
import Navbar2 from "./components/Navbar2";
import Navbar from "./components/Navbar";
import About from "./pages/About";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {path: "/user-panel",
      element: <Landing/>,

    },
    {path: "/admin-panel",
      element: <Navbar2/>,

    },
    {path: "/about-us",
      element: <About/>,

    },
    {
      path: "/books/:id",
      element: <BookDetails2 />,
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
      path: "/client-side",
      element: <ClientSide />,
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
