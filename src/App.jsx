
import { Routes, Route } from "react-router-dom";
import Layout from './layout';
import Home from './pages/HomePage/Home';
import Settings from './pages/settings';
import LoginPage from './pages/LoginPage';
import PrivateRoute from "./pages/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  
  return (
    <AuthProvider>
      <Routes>
      {/* Ensures Layout Wraps All Pages */}
      <Route path="login" element={<LoginPage />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="settings" element={<Settings />} />
        
      </Route>
    </Routes>
    </AuthProvider>
    
    )
}

export default App
