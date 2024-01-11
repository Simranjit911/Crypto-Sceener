import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Crypto from "./pages/Crypto.jsx";
import Trending from "./pages/Trending.jsx";
import Saved from "./pages/Saved.jsx";
import CryptoDetails from "./components/CryptoDetails.jsx";
const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="/" element={<Crypto />}>
        <Route path="/:coinId" element={<CryptoDetails />} />
      </Route>
      <Route path="trending" element={<Trending />} />
      <Route path="saved" element={<Saved />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={Router}></RouterProvider>
);
