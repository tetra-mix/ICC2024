import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.tsx'
import Login from './pages/Login.tsx'
import Register from './pages/Register.tsx'
import ProductRegister from './pages/ProductRegister.tsx'
import PostKuchikomi from './pages/PostKuchikomi'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/account" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/register" element={<ProductRegister />} />
        <Route path='/postkuchikomi' element={<PostKuchikomi/>} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
