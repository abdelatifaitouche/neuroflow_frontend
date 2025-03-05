import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Routes, Route } from "react-router-dom";
import Layout from './layout';
import Home from './pages/Home';
import Settings from './pages/settings';
function App() {
  
  return (
    <Routes>
      {/* Ensures Layout Wraps All Pages */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
    )
}

export default App
