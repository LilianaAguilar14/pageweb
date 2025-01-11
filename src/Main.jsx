import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Systems from "./pages/Systems";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, 
  },
  {
    path: "/about",
    element: <About />, 
  },
  {
    path: "/systems",
    element: <Systems />, 
  },
  {
    path: "/clients",
    element: <Clients />, 
  },
  {
    path: "/contact",
    element: <Contact />, 
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
