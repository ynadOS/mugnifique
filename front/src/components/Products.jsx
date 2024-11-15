import { useEffect, useState } from "react";
import ProductSheet from "./ProductsSheet";

function Products({ products }) {

    const [data,setData] = useState(products)
    

    const [selectedProduct, setSelectedProduct] = useState(null);

    const openModal = (product) => {
      setSelectedProduct(product);
    };
  
    const closeModal = () => {
      setSelectedProduct(null);
    };

    useEffect(() => {
      setData(products)
    })

    return (
      <>
        <div className="product flex flex-col items-center my-20">
          <h2 className="text-2xl mb-10">Nos Produits</h2>
          <div className="cards grid gap-4 justify-items-center items-center sm:grid-cols-2 lg:grid-cols-4">
            {data && data.map((mug, index) => (
              <div
                key={index}
                className="card bg-base-100 w-[250px] h-[400px] shadow-xl cursor-pointer flex flex-col rounded-lg overflow-hidden"
                onClick={() => openModal(mug)} // Ouvre la modale avec les détails du produit
              >
                <figure className="h-1/2">
                  <img 
                    src={mug.img ? mug.img : '../public/img/mug-6345793_640.jpg'} 
                    alt={mug.name} 
                    className="rounded-t-lg w-full h-full object-cover" 
                  />
                </figure>
                <div className="card-body h-1/2 flex flex-col justify-between p-4">
                  <h2 className="card-title text-lg font-bold">{mug.name}</h2>
                  <p className="text-gray-600 text-sm line-clamp-2">{mug.description}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Ajouter au panier</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    
        {/* Affiche la modale si un produit est sélectionné */}
        {selectedProduct && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-4 rounded-lg w-full max-w-2xl h-auto max-h-[80vh] overflow-y-auto">
              <button className="text-right mb-2 text-red-500" onClick={closeModal}>
                Fermer
              </button>
              <ProductSheet product={selectedProduct} />
            </div>
          </div>
        )}
      </>
    );
    
    
  }
  
  export default Products
  

