import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
  useOutlet,
} from "react-router-dom";
import DetailsView from "./DetailsView.jsx";
import { AnimatePresence } from "framer-motion";

const AnimatedOutlet = () => {
  const o = useOutlet();
  const [outlet] = useState(o);

  return <>{outlet}</>;
};

const Root = () => {
  const locationParams = useLocation();
  return (
    <React.StrictMode>
      <AnimatePresence mode="wait">
        <AnimatedOutlet key={locationParams.key} />
      </AnimatePresence>
    </React.StrictMode>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: ":product",
        element: <DetailsView />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
