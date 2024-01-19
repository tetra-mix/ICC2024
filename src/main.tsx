import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.tsx'
import Login from './pages/Login.tsx'
import Register from './pages/Register.tsx'
import ProductRegister from './pages/ProductRegister.tsx'
import Account from './pages/Account.tsx'
import Product from './pages/Product.tsx'
import Error from './pages/Error.tsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/register" element={<ProductRegister />} />
        <Route path="/product" element={<Product />} />
        <Route path="/account" element={<Account />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
