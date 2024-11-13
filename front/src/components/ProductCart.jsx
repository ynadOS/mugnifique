import { useEffect, useState } from "react"

function ProductCart({ product, index, refresh, refreshValue }) {

    const [stock, setStock] = useState(1)
    const [quantity, setQuantity] = useState(product.quantity)
    const [total, setTotal] = useState(null)

    useEffect(() => {
        setStock(product.stock)
        setTotal(quantity * product.price)
    },[])

    const minusProduct = () => {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity - 1;
    
            if (newQuantity === 0) {
                const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
                const updatedCart = existingCart.filter(item => item.id !== product.id); 
                localStorage.setItem("cart", JSON.stringify(updatedCart)); 
    
                alert("Produit supprimé du panier car le stock est épuisé.");
            } else {
                const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
                const productIndex = existingCart.findIndex(item => item.id === product.id);
    
                if (productIndex >= 0) {
                    existingCart[productIndex].quantity = newQuantity;
                    localStorage.setItem("cart", JSON.stringify(existingCart));
                }
    
                setTotal(newQuantity * product.price); 
            }
    
            return newQuantity;
        });
            if (refreshValue) {
                refresh(false); 
            } else {
                refresh(true); 
            }
    }
    

    const plusProduct = () => {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity + 1;
    
            const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
            const productIndex = existingCart.findIndex(item => item.id === product.id);
    
            if (productIndex >= 0) {
                existingCart[productIndex].quantity = newQuantity;
                localStorage.setItem("cart", JSON.stringify(existingCart)); 
            }
    
            setTotal(newQuantity * product.price); 
            return newQuantity; 
        });
            if (refreshValue) {
                refresh(false); 
            } else {
                refresh(true); 
            }
    }
    


    return (
      <>
        <div key={index} className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
<div
    className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:maxW-xl max-xl:mx-auto">
    <div className="img-box"><img src={product.img} alt="perfume bottle image" className="xl:w-[140px] rounded-xl object-cover"/></div>
    <div className="pro-data w-full maxW-sm ">
        <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">{product.name}
        </h5>
        <p
            className="font-normal textLg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
            {product.description}</p>
        <h6 className="font-medium textLg leading-8 text-indigo-600  max-[550px]:text-center">{product.price}</h6>
    </div>
</div>
<div
    className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:maxW-xl max-xl:mx-auto gap-2">
    <h6 className="font-manrope font-bold text-2xl leading-9 text-black w-full maxW-[176px] text-center">
        {product.price}</h6>
    <div className="flex items-center w-full mx-auto justify-center">
        <button
            className="group roundedL-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50" onClick={() => minusProduct()}>
            <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                fill="none">
                <path d="M16.5 11H5.5" stroke="" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6"
                    strokeLinecap="round" />
                <path d="M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6"
                    strokeLinecap="round" 
                
                />
            </svg>
        </button>
        <input type="text"
            className="border-y border-gray-200 outline-none text-gray-900 font-semibold textLg w-full maxW-[118px] minW-[80px] placeholder:text-gray-900 py-[15px] text-center bg-transparent"
            placeholder={quantity}/>
        <button
            className="group rounded-r-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50" onClick={() => plusProduct()}>
            <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                fill="none">
                <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeWidth="1.6"
                    strokeLinecap="round" />
                <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6"
                    strokeLinecap="round" />
                <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6"
                    strokeLinecap="round" />
            </svg>
        </button>
    </div>
    <h6
        className="text-indigo-600 font-manrope font-bold text-2xl leading-9 w-full maxW-[176px] text-center">
        {total}</h6>
</div>
</div>
      </>
    )
  }
  
  export default ProductCart
  








