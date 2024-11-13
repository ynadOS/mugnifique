
function ProductSheet({ product }) {

    const addCart = (product) => {
    
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        
        const productIndex = existingCart.findIndex(item => item.id === product.id);
    
        if (productIndex >= 0) {
            existingCart[productIndex].quantity += 1;
        } else {
            existingCart.push({ ...product, quantity: 1 });
        }
    
        localStorage.setItem("cart", JSON.stringify(existingCart));
    
        alert("Produit ajouté au panier !");
    };
    

  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className=" rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full  object-cover"
                  src={product.img}
                  alt={product.name}
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-900 dark:bg-gray-600 text-white text-xs py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700" onClick={() => addCart(product)}>
                    Ajouter au panier
                  </button>
                </div>
                
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {product.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {product.description}
              </p>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">Prix : </span>
                  <span className="text-gray-600 dark:text-gray-300">{product.price} €</span>
                </div>
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">Stock : </span>
                  <span className="text-gray-600 dark:text-gray-300">{product.availability}</span>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductSheet;
