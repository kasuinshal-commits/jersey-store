import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Store from "./pages/Store";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  // ⭐ GLOBAL CATEGORY STATE
  const [category, setCategory] = useState("");

  return (
    <BrowserRouter>
      <Routes>

        {/* STORE */}
        <Route
          path="/"
          element={
            <Layout setCategory={setCategory}>
              <Store category={category} />
            </Layout>
          }
        />

        {/* LOGIN */}
        <Route
          path="/login"
          element={
            <Layout setCategory={setCategory}>
              <Login />
            </Layout>
          }
        />

        {/* ADMIN */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Layout setCategory={setCategory}>
                <Admin />
              </Layout>
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
