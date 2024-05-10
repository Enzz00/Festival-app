import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import ProgrammationConcertEvenement from "./components/ProgrammationConcertEvenement";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Outlet /> 
      </>
    ),
    children: [
      {
        path: "", 
        element:  <ProgrammationConcertEvenement />,
      },
      {
        path: "Carte",
        element: (
          <>
            <h2>Contenu de la page de Carte</h2>
            <Outlet />
          </>
        ),
        children: [
          {
            path: "",
            element:""
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;