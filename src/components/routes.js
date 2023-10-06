import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";

function Root() {
  return (
    <main class="bg-primary h-100 w-full max-w-[100vw]">
      <div class="mx-auto">
        <Navbar />
        <Outlet />
      </div>
    </main>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <></>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
