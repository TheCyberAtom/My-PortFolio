import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import CaseStudy from "./pages/CaseStudy";
import ReactDOM from 'react-dom/client';
import Error from "./pages/Error";
import Home from "./pages/Home";
import App from './App';
import './index.css';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects/:projectID",
        element: <CaseStudy />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);

reportWebVitals();
