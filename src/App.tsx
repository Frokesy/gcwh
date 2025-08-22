import { AnimatePresence } from "framer-motion";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import BuildWebsite from "./pages/build-website";
import DedicatedServers from "./pages/servers/dedicated-servers";
import LinuxVPSHosting from "./pages/servers/linux-vps-hosting";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/build-website", element: <BuildWebsite /> },

    //server routes
    { path: "/servers/dedicated-servers", element: <DedicatedServers /> },
    { path: "/servers/linux-vps-hosting", element: <LinuxVPSHosting /> },
  ]);

  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  );
};

export default App;
