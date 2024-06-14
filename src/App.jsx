// App.js
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css';
import Main from './assets/components/Main/Main';
import Home from "./assets/components/Pages/Home";
import Header from "./assets/components/Header/Header";
import Usuario from "./assets/components/Usuario/Usuario";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/usuario",
    element: <Usuario/>,
  },

]);

function App() {
  return (
    <>
      <Header/>
      <RouterProvider router={router} />


     
    </>
  );
}

export default App;
