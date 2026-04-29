import { useState } from "react";
import { createBrowseRouter, RouterProvider } from "react-router-dom";
import Login from "./auth/Login";
import Layout from "./layouts/Layout";
import Hero from "./layouts/navlinks/Hero";
import About from "./layouts/navlinks/About";
import Project from "./layouts/navlinks/Project";
import Contact from "./layouts/navlinks/Contact";

export default function App() {
  const [count, setCount] = useState(0);
  const router = createBrowseRouter([
    { path: "/login", element: <Login /> },
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Hero /> },
        { path: "about", element: <About /> },
        { path: "project", element: <Project /> },
        { path: "contact", element: <Contact /> },
        { path: "not-found", element: <div>page not found</div> },
        { path: "*", element: <div>404 Not Found</div> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
