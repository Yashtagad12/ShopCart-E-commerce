import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./Home/home";
import Blog from "./Blog/blog";
import SingleBlog from "./Blog/SingleBlog";
import Shop from "./Shop/Shop";
import SingleProduct from "./Shop/SingleProduct";
import CartPage from "./Shop/CartPage";
import About from "./about/About";
import Contact from "./contactpage/Contact";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

import "./index.css";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// Fonts & Icons
import "./assets/css/animate.css";
import "./assets/css/icofont.min.css";
import "./assets/css/style.min.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:id", element: <SingleBlog /> },
      { path: "shop", element: <Shop /> },
      { path: "shop/:id", element: <SingleProduct /> },
      {
        path: "cart-page",
        element: (
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        ),
      },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
