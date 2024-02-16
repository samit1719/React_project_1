import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Tour from "./pages/Tour";
import Overview from "./pages/Overview";
import Examples from "./pages/Examples";
import Blog from "./pages/Blog";
import Help from "./pages/Help";

const router = createBrowserRouter([
  { path: "/", element: <Overview /> },
  { path: "/overview", element: <Overview /> },
  { path: "/tour", element: <Tour /> },
  { path: "/examples", element: <Examples /> },
  { path: "/blog", element: <Blog /> },
  { path: "/help", element: <Help /> },
]);
function App() {
  return (
    <RouterProvider router={router}/>  
  );
}

export default App;
