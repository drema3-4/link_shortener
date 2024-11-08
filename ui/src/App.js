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
      <Header />
    </div>
  );
}

export default App;