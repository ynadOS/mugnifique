function ProductForm() {
    return (
      <>
        <div className="product flex flex-col items-center my-20">
            <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text">Nom du produit</span>
                <span className="label-text-alt">Mug</span>
            </div>
            <input type="text" placeholder="Nom" className="input input-bordered w-full max-w-xs" />
            <div className="label">

            </div>
            </label>

            <label className="form-control">
            <div className="label">
                <span className="label-text">Description</span>
                <span className="label-text-alt"></span>
            </div>
            <textarea className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
            <div className="label">
                <span className="label-text-alt"></span>
                <span className="label-text-alt"></span>
            </div>
            </label>
            <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text">Prix</span>
                <span className="label-text-alt"></span>
            </div>
            <input type="text" placeholder="12,99" className="input input-bordered w-full max-w-xs" />
            <div className="label">
                <span className="label-text-alt"></span>
                <span className="label-text-alt"></span>
            </div>
            </label>
            <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>Taille</option>
                <option>240 ml</option>
                <option>350 ml</option>
            </select>
            <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
        </div>
      </>
    );
  }

  export default ProductForm;