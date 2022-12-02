import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PokedexGrid } from "./components/PokedexGrid";
import { AuthProvider } from "./context/authContext";
import { Auth } from "./components/Auth";
import './firebase-config'
import Navbar from "./layouts/Navbar";
import styles from "./App.module.css";

const router = createBrowserRouter([
  {
    path: "/pokemon",
    element: <Navbar />,
  },
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/pokedex",
    element: <PokedexGrid/>
  }
]);

export function App() {
  return (
    <div>
      <header>
        <h1 className={styles.title}>Pokemon</h1>
      </header>
      <main>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </main>
    </div>
  );
}
