import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import BookDetails from "./pages/BookDetails";
import BookForm from "./pages/BookForm";
import Contact from "./pages/Contact";
import Books from "./pages/Books";
import ClientSide from "./pages/ClientSide";
import BookDetails2 from "./pages/BookDetails2";
import Test from "./pages/Test";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
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
    {
      path: "/test",
      element: <Test/>
    }
  ]);

  return <RouterProvider router={router} />;
}
export default App;
