import Banner from "../components/Banner"
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
    </>
  )
}

export default Homepage
