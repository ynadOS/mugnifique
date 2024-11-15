import { useRef } from 'react';
import axios from 'axios';

function ProductForm() {
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', formRef.current['productName'].value);
    formData.append('description', formRef.current['description'].value);
    formData.append('price', formRef.current['price'].value);
    formData.append('size', formRef.current['size'].value);
    formData.append('stock', formRef.current['stock'].value);
    if (formRef.current['image'].files[0]) {
      formData.append('picture', formRef.current['image'].files[0]);
    }

    try {
      const response = await axios.post('http://localhost:8000/api/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
      });
      console.log('Produit ajouté avec succès:', response.data);
    } catch (error) {
      console.error('Erreur lors de l’ajout du produit:', error);
    }
  };

  return (
    <form ref={formRef} className="product flex flex-col items-center my-20" onSubmit={handleSubmit}>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Nom du produit</span>
          <span className="label-text-alt">Mug</span>
        </div>
        <input
          type="text"
          name="productName"
          placeholder="Nom"
          className="input input-bordered w-full max-w-xs"
        />
      </label>

      <label className="form-control">
        <div className="label">
          <span className="label-text">Description</span>
        </div>
        <textarea
          name="description"
          className="textarea textarea-bordered h-24"
          placeholder="Bio"
        ></textarea>
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Prix</span>
        </div>
        <input
          type="text"
          name="price"
          placeholder="12,99"
          className="input input-bordered w-full max-w-xs"
        />
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Stock</span>
        </div>
        <input
          type="number"
          name="stock"
          placeholder="12"
          className="input input-bordered w-full max-w-xs"
        />
      </label>

      <label className="form-control w-full max-w-xs">
      <div className="label">
          <span className="label-text">Taille</span>
        </div>
      <select name="size" className="select select-bordered w-full max-w-xs">
        <option disabled value="">
          Taille
        </option>
        <option>240 ml</option>
        <option>350 ml</option>
      </select>
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label">
            <span className="label-text">Image</span>
        </div>

      <input
        type="file"
        name="image"
        className="file-input file-input-bordered w-full max-w-xs"
      />
      </label>

      <button type="submit" className="btn btn-primary mt-4">
        Ajouter le produit
      </button>
    </form>
  );
}

export default ProductForm;
