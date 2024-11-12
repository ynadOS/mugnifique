import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './page/HomePage'
import Products from './page/Poducts'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Homepage />}/>
        <Route  path="/products" element={<Products />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
