import { useState } from "react";
import ProductSheet from "./ProductsSheet";

function Products() {

    const data = [
        {id:1, name:"tasse1", img:"../../public/img/spawning-3935847_640.jpg", description:"Ceci est la description de ma première tasse", stock:4, price:15},
        {id:2, name:"tasse2", img:"../../public/img/spawning-3935847_640.jpg", description:"Ceci est la description de ma deuxième tasse", stock:5, price:25},
        {id:3, name:"tasse3", img:"../../public/img/spawning-3935847_640.jpg", description:"Ceci est la description de ma troisième tasse", stock:9, price:10},
        {id:4, name:"tasse4", img:"../../public/img/spawning-3935847_640.jpg", description:"Ceci est la description de ma quatrième tasse", stock:7, price:5},
    ]

    const [selectedProduct, setSelectedProduct] = useState(null);

    const openModal = (product) => {
      setSelectedProduct(product);
    };
  
    const closeModal = () => {
      setSelectedProduct(null);
    };

    return (
      <>
        <div className="product flex flex-col items-center my-20">
        <h2 className="text-2xl mb-10">Nos Produits</h2>
        <div className="cards grid gap-4 justify-items-center items-center sm:grid-cols-2 lg:grid-cols-4">
          {data.map((mug, index) => (
            <div
              key={index}
              className="card bg-base-100 w-60 shadow-xl cursor-pointer"
              onClick={() => openModal(mug)} // Ouvre la modale avec les détails du produit
            >
              <figure>
                <img src={mug.img} alt={mug.name} className="rounded-xl" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{mug.name}</h2>
                <p>{mug.description}</p>
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
    )
  }
  
  export default Products
  

