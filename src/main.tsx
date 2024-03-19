import React from 'react'
import ReactDOM from 'react-dom/client'
import Top from './pages/Top.tsx'
import Tea from './pages/Tea.tsx'
import Sweets from './pages/Sweets.tsx'
import Login from './pages/user/Login.tsx'
import Register from './pages/user/Register.tsx'
import Account from './pages/user/Account.tsx'
import TeaRegister from './pages/products/Tea.tsx'
import SweetsRegister from './pages/products/Sweets.tsx'
import TeaItem from './pages/item/Tea.tsx'
import SweetsItem from './pages/item/Sweets.tsx'
import UserContext from './components/UserContext.tsx'
import Error from './pages/Error.tsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/register" element={<Register />} />
          <Route path="/user/account" element={<Account />} />
          <Route path="/producst/tea" element={<TeaRegister />} />
          <Route path="/products/sweets" element={<SweetsRegister />} />
          <Route path="/item/tea" element={<TeaItem />} />
          <Route path="/item/sweets/" element={<SweetsItem />} />
          <Route path="/sweets" element={<Sweets />} />
          <Route path="/tea" element={<Tea />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </UserContext>
  </React.StrictMode>,
)
