import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './page/HomePage'
import Products from './page/PoductsPage'
import Cartpage from './page/CartPage'
import PaymentForm from './page/PaymentForm'
import ContactPage from './page/ContactPage'

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
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
