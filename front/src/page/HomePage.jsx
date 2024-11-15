import { useEffect, useState } from "react"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import Products from "../components/Products"
import ProductsBySize from "../components/ProductsBySize"
import axios from "axios"

function Homepage() {

  const [products, setProducts] = useState([])

  useEffect(() => {


      axios.get('http://localhost:8000/api/products').then((res) => setProducts(res.data)).then(() => {
    if (localStorage.getItem('token')) {

        axios.get(`http://localhost:8000/api/users/${localStorage.getItem('id')}`).then((res) => {
          localStorage.setItem('role', res.data.role)
        })
      }
      })
    
  },[])


  return (
    <>
      <NavBar/>
      <Banner />
      <ProductsBySize/>
      <Products products={products}/>
      <Footer/>
    </>
  )
}

export default Homepage
