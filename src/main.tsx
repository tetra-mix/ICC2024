import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.tsx'
import Login from './pages/user/Login.tsx'
import Register from './pages/user/Register.tsx'
import Account from './pages/user/Account.tsx'
import TeaRegister from './pages/products/Tea.tsx'
import SweetsRegister from './pages/products/Sweets.tsx'
import Tea from './pages/Tea.tsx'
import UserContext from './components/UserContext.tsx'
import Sweets from './pages/Sweets.tsx'
import Error from './pages/Error.tsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/producst/tea" element={<TeaRegister />} />
          <Route path="/products/sweets" element={<SweetsRegister />} />
          <Route path="/tea" element={<Tea />} />
          <Route path="/tea" element={<Tea />} />
          <Route path="/sweets" element={<Sweets />} />
          <Route path="/account" element={<Account />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </UserContext>
  </React.StrictMode>,
)
