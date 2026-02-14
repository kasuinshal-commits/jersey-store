import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from "./pages/Store";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* STORE */}
        <Route
          path="/"
          element={
            <Layout>
              <Store />
            </Layout>
          }
        />

        {/* LOGIN PAGE */}
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />

        {/* PROTECTED ADMIN */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Layout>
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
