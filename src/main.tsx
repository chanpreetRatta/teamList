import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "../main.css";

import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GroundInputForm from "./components/form/GroundInputForm.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App></App> },
  {
    path: "/input",
    element: <GroundInputForm></GroundInputForm>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
