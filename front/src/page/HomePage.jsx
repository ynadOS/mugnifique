import Banner from "../components/Banner"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import Products from "../components/Products"
import ProductsBySize from "../components/ProductsBySize"

function Homepage() {

  return (
    <>
      <NavBar/>
      <Banner />
      <ProductsBySize/>
      <Products />
      <Footer/>
    </>
  )
}

export default Homepage
