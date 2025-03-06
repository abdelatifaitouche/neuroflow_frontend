
import { Routes, Route } from "react-router-dom";
import Layout from './layout';
import Home from './pages/HomePage/Home';
import Settings from './pages/settings';
import LoginPage from './pages/LoginPage';
function App() {
  
  return (
    <Routes>
      {/* Ensures Layout Wraps All Pages */}
      <Route path="login" element={<LoginPage />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="settings" element={<Settings />} />
        
      </Route>
    </Routes>
    )
}

export default App
