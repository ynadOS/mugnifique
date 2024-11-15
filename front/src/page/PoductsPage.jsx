import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import Products from "../components/Products"
import axios from "axios"

function ProductsPage() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/api/products').then((res) => setProducts(res.data))
  },[])

  return (
    <>
      <NavBar/>
      <Products products={products}/>
      <Footer />
    </>
  )
}

export default ProductsPage
