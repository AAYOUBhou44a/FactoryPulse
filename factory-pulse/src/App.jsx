
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";

import Dashboard from "./pages/Dashboard";
import Machines from "./pages/Machines";
import NewMachine from "./pages/NewMachine";

import "./index.css";

function App() {
  const [machines, setMachines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Charger les machines depuis le fichier JSON
  useEffect(() => {
    fetch("/machines.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Impossible de charger les machines");
        }
        return response.json();
      })
      .then((data) => {
        setMachines(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Modifier le statut d'une machine
  const updateStatus = (id, status) => {
    setMachines((machines) =>
      machines.map((machine) =>
        machine.id === id ? { ...machine, status } : machine
      )
    );
  };

  // Supprimer une machine
  const deleteMachine = (id) => {
    if (
      window.confirm(
        "Est-ce que vous êtes sûr de vouloir supprimer cette machine ?"
      )
    ) {
      setMachines((machines) =>
        machines.filter((machine) => machine.id !== id)
      );
    }
  };

  // Ajouter une machine
  const addMachine = (machine) => {
    setMachines((machines) => [
      ...machines,
      {
        ...machine,
        id: `M-${Date.now().toString().slice(-6)}`,
      },
    ]);
  };

  // Afficher l'écran de chargement
  if (loading) {
    return (
      <div className="loading-screen">
        <span className="loading-mark">F.</span>
        <p>INITIALIZING FACTORYPULSE</p>
        <div className="loading-line">
          <span />
        </div>
      </div>
    );
  }

  // Afficher une erreur si le chargement échoue
  if (error) {
    return (
      <div className="loading-screen error-screen">
        <span className="loading-mark">!</span>
        <p>DATA CONNECTION FAILED</p>
        <small>{error}</small>
        <small>Vérifie public/machines.json</small>
      </div>
    );
  }

  // Afficher l'application
  return (
    <BrowserRouter>
      <div className="control-layout">
        <Sidebar />

        <div className="control-main">
          <Header />

          <main className="page-content">
            <Routes>
              <Route
                path="/"
                element={<Dashboard machines={machines} />}
              />

              <Route
                path="/machines"
                element={
                  <Machines
                    machines={machines}
                    updateStatus={updateStatus}
                    deleteMachine={deleteMachine}
                  />
                }
              />

              <Route
                path="/machines/new"
                element={<NewMachine addMachine={addMachine} />}
              />

              <Route
                path="*"
                element={<Dashboard machines={machines} />}
              />
            </Routes>

            <footer className="page-footer">
              <span>FACTORYPULSE® — INDUSTRIAL MONITORING</span>
              <span>SAFI / MOROCCO / 2026</span>
            </footer>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
