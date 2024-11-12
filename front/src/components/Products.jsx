function Products() {

    const data = [
        {name:"tasse1", img:"../../public/img/spawning-3935847_640.jpg", description:"Ceci est la description de ma première tasse"},
        {name:"tasse2", img:"../../public/img/spawning-3935847_640.jpg", description:"Ceci est la description de ma deuxième tasse"},
        {name:"tasse3", img:"../../public/img/spawning-3935847_640.jpg", description:"Ceci est la description de ma troisième tasse"},
        {name:"tasse4", img:"../../public/img/spawning-3935847_640.jpg", description:"Ceci est la description de ma première tasse"},
    ]

    return (
      <>
        <div className="product flex flex-col items-center my-20">
            <h2 className="text-2xl mb-10" >Nos Produits</h2>
            <div className="cards cards grid gap-4 justify-items-center items-center sm:grid-cols-2 lg:grid-cols-4">
                {
                    data && data.map((mug,index) =>
                        <div key={index} className="card bg-base-100 w-60 shadow-xl">
                            <figure>
                                <img
                                src={mug.img}
                                alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{mug.name}</h2>
                                <p>{mug.description}</p>
                                <div className="card-actions justify-end">
                                <button className="btn btn-primary">Ajouter au panier</button>
                                </div>
                            </div>
                        </div>
                    )
                }
                
            </div>
        </div>

      </>
    )
  }
  
  export default Products
  

