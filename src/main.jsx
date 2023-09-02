import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Product from './components/Product.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/product/:name" element={<Product name={""} />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

