import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/Home.jsx";
import Blog from "./page/Blog.jsx";
import About from "./page/About.jsx";
import Servicese from "./page/Servicese.jsx";
import Contact from "./page/Contact.jsx";
import SingleBlog from "./components/SingleBlog.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/servicese",
        element: <Servicese />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/blogs/:id",
        element: <SingleBlog />,
        loader: ({params}) => fetch(`http://localhost:5000/blogs/${params.id}`)
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
