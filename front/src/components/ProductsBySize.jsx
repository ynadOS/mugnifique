function ProductsBySize() {

    return (
      <>
        <div className="productBySize productBySize flex flex-col items-center my-20 ">
            <h2 className="text-2xl" >Nos différentes tailles</h2>
            <p> 2 tailles pour convenir à chacun de vos besoins</p>
            <div className="cards flex flex-wrap gap-2 justify-center items-center">
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        
                        <img
                        src="../../public/img/mug-6345793_640.jpg"
                        alt="Shoes"
                        className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Mug</h2>   
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                        src="../..\public\img\spawning-3935847_640.jpg"
                        alt="Shoes"
                        className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Super Mug</h2>   
                    </div>
                </div>
            </div>
        </div>

      </>
    )
  }
  
  export default ProductsBySize
  

