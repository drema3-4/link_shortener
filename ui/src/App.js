import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home.js';
import Login from "./auth/Login.js";
import Dashboard from "./auth/DashBoard.js";
import AuthProvider from "./auth/AuthProvider.js";
import PrivateRoute from "./auth/PrivateRoute.js";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            {/* Other routes */}
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;