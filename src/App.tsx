import { AnimatePresence } from "framer-motion";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import BuildWebsite from "./pages/build-website";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/build-website", element: <BuildWebsite /> },
  ]);

  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  );
};

export default App;
