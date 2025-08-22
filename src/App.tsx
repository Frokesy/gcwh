import { AnimatePresence } from "framer-motion";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import BuildWebsite from "./pages/build-website";
import DedicatedServers from "./pages/servers/dedicated-servers";
import LinuxVPSHosting from "./pages/servers/linux-vps-hosting";
import LinuxVDSServer from "./pages/servers/linux-vds-server";
import WindowsCloudsServer from "./pages/servers/windows-clouds-server";
import WindowsVDSServer from "./pages/servers/windows-vds-server";
import ManagedVPSServer from "./pages/servers/managed-vps-server";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/build-website", element: <BuildWebsite /> },

    //server routes
    { path: "/servers/dedicated-servers", element: <DedicatedServers /> },
    { path: "/servers/linux-vps-hosting", element: <LinuxVPSHosting /> },
    { path: "/servers/linux-vds-server", element: <LinuxVDSServer /> },
    { path: "/servers/windows-cloud-server", element: <WindowsCloudsServer /> },
    { path: "/servers/windows-vds-server", element: <WindowsVDSServer /> },
    { path: "/servers/managed-vps-server", element: <ManagedVPSServer /> },
  ]);

  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  );
};

export default App;
