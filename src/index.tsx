import React from "react"
import ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements, 
  Route
} from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import Hero from "./pages/Hero";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import Unauthorized from "./components/Unauthorized";
import "./index.css"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Hero />} />
    <Route path="/home" element={<Home />} />
    <Route path="*" element={<NotFound />} />
    <Route path="unauthorized" element={<Unauthorized />} />
  </Route>
))

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
