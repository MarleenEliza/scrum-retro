import { AuthProvider } from "context/AuthContext";
import { LoginPage } from "components/pages/LoginPage";
import { HomePage } from "components/pages/HomePage";
import { ProtectedRoute } from "components/templates/ProtectedRoute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RetroScrumProvider } from "context/RetroScrumContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <RetroScrumProvider>
                  <HomePage />
                </RetroScrumProvider>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
