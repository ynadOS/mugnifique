import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './page/HomePage'
import Products from './page/PoductsPage'
import Cartpage from './page/CartPage'
import PaymentForm from './page/PaymentForm'
import ContactPage from './page/ContactPage'
import AdminPage from './page/AdminPage'
import LoginPage from './page/LoginPage'
import RegisterPage from './page/RegisterPage'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Homepage />}/>
        <Route  path="/products" element={<Products />}/>
        <Route  path="/cart" element={<Cartpage />}/>
        <Route  path="/payment" element={<PaymentForm />}/>
        <Route  path="/contact" element={<ContactPage />}/>
        <Route  path="/admin" element={<AdminPage />}/>
        <Route  path="/login" element={<LoginPage />}/>
        <Route  path="/register" element={<RegisterPage />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
