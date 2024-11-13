import { useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import ProductCart from "../components/ProductCart"
import { NavLink } from "react-router-dom/dist"


function Cartpage() {

    const [products, setProducts] = useState([])
    const [totalProducts, setTotalProducts] = useState(null)
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {

        setProducts(JSON.parse(localStorage.getItem("cart")))
        setTotalProducts(() => {
            let total = 0;
            const cart = JSON.parse(localStorage.getItem("cart")) || [];
            
            cart.forEach(element => {
                let priceProduct = element.quantity * element.price

                total += priceProduct;
            });
        
            return total;
        });
    },[refresh])

  return (
    <>
      <NavBar/>
      <section className="py-24 relative">
        <div className="w-full maxW-7xl px-4 md:px-5 lg-6 mx-auto">

            <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">Shopping Cart
            </h2>
            <div className="hidden lg:grid grid-cols-2 py-6">
                <div className="font-normal text-xl leading-8 text-gray-500">Product</div>
                <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
                    <span className="w-full maxW-[200px] text-center">Delivery Charge</span>
                    <span className="w-full maxW-[260px] text-center">Quantity</span>
                    <span className="w-full maxW-[200px] text-center">Total</span>
                </p>
            </div>

            {
                products && products.map((product, index) => <ProductCart key={index} product={product} refresh={setRefresh} refreshValue={refresh}/>)
            }

            <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 maxLg:maxW-xl maxLg:mx-auto">
             
                <div className="flex items-center justify-between w-full py-6">
                    <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">Total</p>
                    <h6 className="font-manrope font-medium text-2xl leading-9 text-indigo-500">{totalProducts}</h6>
                </div>
            </div>
            <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
              
                <NavLink
                    className="rounded-full w-full maxW-[280px] py-4 text-center justify-center items-center bg-indigo-600 font-semibold textLg textWhite flex transition-all duration-500 hover:bg-indigo-700" to='/payment'>Procéder au paiement
                    <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22"
                        fill="none">
                        <path d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998" stroke="white" strokeWidth="1.6"
                            strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </NavLink>
            </div>
        </div>
    </section>
                                            
    </>
  )
}

export default Cartpage
