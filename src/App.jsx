import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/HomePage/Home";
import Settings from "./pages/settings";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./pages/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import Procedures from "./pages/Procedures";

import { Toaster } from "sonner";
import CreateProcedurePage from "./pages/CreateProcedurePage";
function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route element={<Layout />}>
                    <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
                    <Route path="/procedures" element={<PrivateRoute><Procedures /></PrivateRoute>} />
                    <Route path="/procedures/new" element={<PrivateRoute><CreateProcedurePage /></PrivateRoute>} />

                    <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
                </Route>
            </Routes>
            <Toaster />

        </AuthProvider>
    );
}

export default App;
